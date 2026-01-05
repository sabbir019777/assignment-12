import { connectDB } from "../../../lib/db"; 
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const db = await connectDB();
        const usersCollection = db.collection("users");
        const newUser = await request.json();
        
        
        const result = await usersCollection.insertOne(newUser);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: "Failed to save user" }, { status: 500 });
    }
}