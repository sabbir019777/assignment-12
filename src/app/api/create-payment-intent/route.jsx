import { NextResponse } from "next/server";
// Stripe কনফিগারেশন এভাবে লিখলে বিল্ড টাইমে এরর দিবে না
// এই পরিবর্তনটি বিল্ড এরর আটকাবে
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || "dummy_key");

export async function POST(request) {
  try {
    const { price } = await request.json();
    
    // প্রাইস চেক করা জরুরি যেন খালি না থাকে
    if (!price) {
      return NextResponse.json({ message: "Price is required" }, { status: 400 });
    }

    const amount = Math.round(price * 100); // parseInt এর বদলে Math.round ব্যবহার করা নিরাপদ

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe Error:", error);
    return NextResponse.json({ message: "Payment Intent Error", error: error.message }, { status: 500 });
  }
}