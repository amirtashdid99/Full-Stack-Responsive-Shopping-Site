import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { Package, Calendar, DollarSign, MapPin, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    success?: string;
  }>;
}

export default async function OrderDetailPage({ params, searchParams }: PageProps) {
  const session = await auth();
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  if (!session) {
    redirect("/auth/login?callbackUrl=/orders/" + resolvedParams.id);
  }

  const order = await prisma.order.findUnique({
    where: {
      id: resolvedParams.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
      address: true,
    },
  });

  if (!order) {
    notFound();
  }

  // Ensure user owns this order
  if (order.userId !== (session.user as any).id) {
    redirect("/orders");
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "PROCESSING":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "SHIPPED":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "DELIVERED":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "CANCELLED":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "PENDING":
        return "Your order is pending payment confirmation.";
      case "PROCESSING":
        return "Your order is being processed and will ship soon.";
      case "SHIPPED":
        return "Your order has been shipped and is on its way.";
      case "DELIVERED":
        return "Your order has been delivered. Enjoy your purchase!";
      case "CANCELLED":
        return "This order has been cancelled.";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Success Message */}
      {resolvedSearchParams.success === "true" && (
        <div className="mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">
                Order Placed Successfully!
              </h2>
              <p className="text-green-700 dark:text-green-300">
                Thank you for your purchase. Your order confirmation has been sent to your email.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <Link
        href="/orders"
        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Orders
      </Link>

      {/* Order Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Order #{order.id.slice(0, 8).toUpperCase()}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {getStatusMessage(order.status)}
            </p>
          </div>
          <span
            className={`px-6 py-3 rounded-full text-sm font-semibold ${getStatusColor(
              order.status
            )}`}
          >
            {order.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Order Date</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {new Date(order.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Items</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {order.items.reduce((sum, item) => sum + item.quantity, 0)} item(s)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Order Items
          </h2>
          {order.items.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="flex gap-6">
                <Link href={`/products/${item.product.slug}`}>
                  <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0 hover:opacity-75 transition cursor-pointer">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </Link>
                <div className="flex-1">
                  <Link href={`/products/${item.product.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {item.product.category.replace("_", " & ")}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <p className="text-gray-600 dark:text-gray-400">
                      Quantity: <span className="font-semibold">{item.quantity}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Price: <span className="font-semibold">${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping & Summary */}
        <div className="space-y-6">
          {/* Shipping Address */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Shipping Address
              </h2>
            </div>
            <div className="text-gray-600 dark:text-gray-400 space-y-1">
              <p className="font-semibold text-gray-900 dark:text-white">
                {order.address.fullName}
              </p>
              <p>{order.address.addressLine1}</p>
              {order.address.addressLine2 && <p>{order.address.addressLine2}</p>}
              <p>
                {order.address.city}, {order.address.state} {order.address.zipCode}
              </p>
              <p>{order.address.country}</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>${(order.total / 1.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax (10%)</span>
                <span>${(order.total * 0.1 / 1.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  FREE
                </span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">
              If you have any questions about your order, please contact our support team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-semibold"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
