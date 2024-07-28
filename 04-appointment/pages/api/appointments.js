import { firestore } from "../../firebase/clientApp"; // Adjust the path as needed
import firebase from "firebase/compat/app";

export default async function handler(req, res) {
  const appointmentsRef = firestore.collection("appointments");

  if (req.method === "GET") {
    try {
      const snapshot = await appointmentsRef.get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(data);
    } catch (error) {
      console.error("GET Error:", error);
      res.status(500).json({ error: "Failed to read data" });
    }
  } else if (req.method === "POST") {
    const newElement = req.body;
    try {
      const docRef = await appointmentsRef.add(newElement);
      res.status(201).json({ id: docRef.id, ...newElement });
    } catch (error) {
      console.error("POST Error:", error);
      res.status(500).json({ error: "Failed to write data" });
    }
  } else if (req.method === "PUT") {
    const updatedElement = req.body;
    if (!updatedElement.id) {
      res.status(400).json({ error: "ID is required" });
      return;
    }
    try {
      const docRef = appointmentsRef.doc(updatedElement.id);
      await docRef.set(updatedElement, { merge: true });
      res.status(200).json(updatedElement);
    } catch (error) {
      console.error("PUT Error:", error);
      res.status(500).json({ error: "Failed to update data" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    if (!id) {
      res.status(400).json({ error: "ID is required" });
      return;
    }
    try {
      await appointmentsRef.doc(id).delete();
      res.status(200).json({ message: "Element deleted successfully" });
    } catch (error) {
      console.error("DELETE Error:", error);
      res.status(500).json({ error: "Failed to delete data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
