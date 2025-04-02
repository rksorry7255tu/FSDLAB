const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://localhost:27017";

// Create a new MongoDB client
const client = new MongoClient(url);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Select the database and collection
    const database = client.db("myDatabase");
    const collection = database.collection("users");

    // Insert a document
    const insertResult = await collection.insertOne({
      name: "Alice",
      age: 25,
      city: "New York",
    });
    console.log("Inserted document ID:", insertResult.insertedId);

    // Insert multiple documents
    await collection.insertMany([
      { name: "Bob", age: 28, city: "Los Angeles" },
      { name: "Charlie", age: 32, city: "Chicago" },
    ]);
    console.log("Multiple documents inserted");

    // Find a single document
    const user = await collection.findOne({ name: "Alice" });
    console.log("User found:", user);

    // Find multiple documents
    const users = await collection.find({}).toArray();
    console.log("All Users:", users);

    // Update a document
    await collection.updateOne({ name: "Alice" }, { $set: { age: 26 } });
    console.log("Document updated");

    // Delete a document
    await collection.deleteOne({ name: "Charlie" });
    console.log("Document deleted");

    // List all collections in the database
    const collections = await database.listCollections().toArray();
    console.log(
      "Collections:",
      collections.map((col) => col.name)
    );
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("Connection closed");
  }
}

// Execute the function
run().catch(console.dir);
