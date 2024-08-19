import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

const firestore = firebase.firestore();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      const usersRef = firestore.collection("users");
      const snapshot = await usersRef
        .where("username", "==", username)
        .where("password", "==", password)
        .get();

      if (snapshot.empty) {
        return res.status(200).json({ message: "Invalid Credentials" });
      }

      const foundUser = snapshot.docs[0].data();
      return res.status(200).json(foundUser);
    } catch (error) {
      console.error("Error retrieving user from Firestore:", error);
      return res.status(500).json({ error: "Failed to retrieve user data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
