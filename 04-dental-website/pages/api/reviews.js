import { db } from "@/firebase/clientApp";
import { v4 } from "uuid"; // To generate unique IDs for new reviews

const collectionName = "reviews"; // db collection name

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const snapshot = await db.collection(collectionName).get();
      const reviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(reviews);
    } catch (error) {
      console.error("GET Error:", error);
      res.status(500).json({ error: "Failed to read data" });
    }
  } else if (req.method === "POST") {
    try {
      const newElement = req.body;
      newElement.id = v4(); // Generate a unique ID for the new review
      await db.collection(collectionName).doc(newElement.id).set(newElement);
      res.status(201).json(newElement);
    } catch (error) {
      console.error("POST Error:", error);
      res.status(500).json({ error: "Failed to write data" });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedElement = req.body;
      const docRef = db.collection(collectionName).doc(updatedElement.id);
      const doc = await docRef.get();
      if (doc.exists) {
        await docRef.update(updatedElement);
        res.status(200).json(updatedElement);
      } else {
        res.status(404).json({ error: "Element not found" });
      }
    } catch (error) {
      console.error("PUT Error:", error);
      res.status(500).json({ error: "Failed to update data" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const docRef = db.collection(collectionName).doc(id);
      const doc = await docRef.get();
      if (doc.exists) {
        await docRef.delete();
        res.status(200).json({ message: "Element deleted successfully" });
      } else {
        res.status(404).json({ error: "Element not found" });
      }
    } catch (error) {
      console.error("DELETE Error:", error);
      res.status(500).json({ error: "Failed to delete data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
