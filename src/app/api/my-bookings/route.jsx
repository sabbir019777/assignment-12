import { connectDB } from "../../../lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// ১. ডাটা দেখানোর জন্য GET মেথড
export const GET = async (request) => {
    try {
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings");
        const bookings = await bookingsCollection.find().toArray();
        return NextResponse.json({ bookings }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch bookings", error: error.message }, { status: 500 });
    }
};

// ২. স্ট্যাটাস আপডেট করার জন্য PATCH মেথড (Abort Mission এর জন্য এটি দরকার)
export const PATCH = async (request) => {
    try {
        const { id, status } = await request.json(); // ফ্রন্টএন্ড থেকে id এবং status আসবে
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings");

        const result = await bookingsCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { status: status } } // ডাটাবেসে স্ট্যাটাস 'Cancelled' সেট হবে
        );

        if (result.matchedCount === 1) {
            return NextResponse.json({ message: "Protocol State Updated Successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Booking record not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Update Failed", error: error.message }, { status: 500 });
    }
};

// ৩. ডাটা ডিলিট করার জন্য DELETE মেথড
export const DELETE = async (request) => {
    try {
        const { id } = await request.json(); 
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings");

        const result = await bookingsCollection.deleteOne({
            _id: new ObjectId(id),
        });

        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Protocol Terminated Successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Booking not found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
    }
};