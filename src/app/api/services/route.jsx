import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    const servicesCollection = db.collection("services");
    const result = await servicesCollection.find().toArray();
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching services:", error.message);
    return NextResponse.json({ 
      message: "Data fetch failed", 
      error: error.message 
    }, { status: 500 });
  }
}