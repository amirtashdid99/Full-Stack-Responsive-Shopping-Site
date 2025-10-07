import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(request: Request) {
  try {
    // Check for Stripe configuration at runtime
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_placeholder_for_build') {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 500 }
      );
    }

    if (!webhookSecret) {
      return NextResponse.json(
        { error: "Webhook secret is not configured" },
        { status: 500 }
      );
    }

    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        await handleCheckoutComplete(session);
        break;

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log("PaymentIntent succeeded:", paymentIntent.id);
        break;

      case "payment_intent.payment_failed":
        const failedPayment = event.data.object;
        await handlePaymentFailed(failedPayment);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

async function handleCheckoutComplete(session: any) {
  try {
    const orderId = session.metadata?.orderId;

    if (!orderId) {
      console.error("No orderId in session metadata");
      return;
    }

    // Update order status to PROCESSING
    const order = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: "PROCESSING",
        stripeSessionId: session.id,
        stripePaymentIntentId: session.payment_intent,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    // Reduce inventory for each product
    for (const item of order.items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: {
          inventory: {
            decrement: item.quantity,
          },
        },
      });
    }

    console.log(`Order ${orderId} updated to PROCESSING and inventory reduced`);
  } catch (error) {
    console.error("Error handling checkout complete:", error);
  }
}

async function handlePaymentFailed(paymentIntent: any) {
  try {
    // Find order by payment intent ID
    const order = await prisma.order.findFirst({
      where: {
        stripePaymentIntentId: paymentIntent.id,
      },
    });

    if (order) {
      // Update order status to CANCELLED
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: "CANCELLED",
        },
      });

      console.log(`Order ${order.id} cancelled due to payment failure`);
    }
  } catch (error) {
    console.error("Error handling payment failed:", error);
  }
}
