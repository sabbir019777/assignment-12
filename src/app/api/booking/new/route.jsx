import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const bookingData = await request.json();
    
    // ডাটাবেজ কানেকশন
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    // ডাটা ইনসার্ট করা
    const newBooking = {
      ...bookingData,
      status: "Pending", // ডিফল্ট স্ট্যাটাস
      createdAt: new Date(),
    };

    const result = await bookingsCollection.insertOne(newBooking);

    return NextResponse.json({ message: "Booking Saved", id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}