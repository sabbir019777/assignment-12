import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { price } = await request.json();
    const amount = parseInt(price * 100); // সেন্টে রূপান্তর

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ message: "Payment Intent Error", error: error.message }, { status: 500 });
  }
}