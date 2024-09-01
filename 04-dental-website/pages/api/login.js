import { firestore } from "@/firebase/clientApp"; // Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      // Query Firestore for the user with the given username and password
      const usersRef = firestore.collection("users");
      const snapshot = await usersRef
        .where("username", "==", username)
        .where("password", "==", password)
        .get();

      if (snapshot.empty) {
        // No matching documents found
        return res.status(200).json({ message: "Invalid Credentials" });
      }

      // Get the first matching user document
      const foundUser = snapshot.docs[0].data();
      return res.status(200).json(foundUser);
    } catch (error) {
      console.error("Error retrieving user from Firestore:", error);
      return res.status(500).json({ error: "Failed to retrieve user data" });
    }
  } else if (req.method === "PUT") {
    const { uid, newData } = req.body;

    try {
      const userRef = firestore.collection("users").doc(uid);
      await userRef.update(newData);

      return res
        .status(200)
        .json({ message: "User data updated successfully" });
    } catch (error) {
      console.error("Error updating user data:", error);
      return res.status(500).json({ error: "Failed to update user data" });
    }
  } else if (req.method === "GET") {
    const { uid } = req.query;

    try {
      const userRef = firestore.collection("users").doc(uid);
      const doc = await userRef.get();

      if (!doc.exists) {
        return res.status(404).json({ message: "User not found" });
      }

      const userData = doc.data();

      return res.status(200).json(userData);
    } catch (error) {
      console.error("Error retrieving user data:", error);
      return res.status(500).json({ error: "Failed to retrieve user data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
