import { connectDB } from "@/lib/db"; // নিশ্চিত করুন পাথ সঠিক আছে
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const db = await connectDB();
        const usersCollection = db.collection("users");
        const newUser = await request.json();
        
        // রেজিস্ট্রেশন ডাটা সেভ করা
        const result = await usersCollection.insertOne(newUser);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: "Failed to save user" }, { status: 500 });
    }
}