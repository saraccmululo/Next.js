import { MongoClient } from "mongodb";
async function testConnection() {
  try {
    const client = await MongoClient.connect('mongodb+srv://saramululo:wbVt6XmaNhfad9h6@cluster0.90hkhmk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    console.log("✅ Connected to MongoDB successfully!");
    await client.close();
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
}

testConnection();