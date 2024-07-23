import fs from "fs";
import path from "path";

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject("Failed to read data");
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "users.json");

  if (req.method === "POST") {
    const users = await readFile(filePath);
    const { username, password } = req.body;
    const foundUser = users.filter(
      (user) => user.username == username && user.password == password
    )[0];
    if (foundUser) {
      return res.status(200).json(foundUser);
    } else {
      return res.status(200).json({ message: "Invalid Credentials" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
