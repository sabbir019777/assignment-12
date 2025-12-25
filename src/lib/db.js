import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db) return db;

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is missing in .env file");

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    db = client.db("care_xyz"); 
    console.log("🟢 Connected to MongoDB: care_xyz");
    return db;
  } catch (error) {
    console.error("🔴 MongoDB Connection Error:", error.message);
    throw error;
  }
};