import Stripe from "stripe";

// Use a placeholder key during build time, will be replaced at runtime
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_build';

export const stripe = new Stripe(stripeKey, {
  apiVersion: "2024-06-20",
  typescript: true,
});
