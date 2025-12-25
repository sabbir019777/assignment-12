import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db"; // আপনার DB কানেকশন পাথ চেক করুন
import { ObjectId } from "mongodb";

export async function DELETE(request) {
    try {
        const { id } = await request.json(); // ফ্রন্টএন্ড থেকে পাঠানো ID
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings"); // কালেকশন নাম নিশ্চিত করুন

        const result = await bookingsCollection.deleteOne({
            _id: new ObjectId(id),
        });

        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Protocol Terminated" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Target Not Found" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
}