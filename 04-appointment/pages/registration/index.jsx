import React from "react";
import axios from "axios";
import { v4 } from "uuid";
import { TextField, Button } from "@mui/material";

export default function RegistrationForm() {
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const users = Object.fromEntries(formData.entries());
    users.id = v4();

    axios
      .post("/api/users", users)
      .then((res) => console.log("Response:", res))
      .catch((e) => console.error("Error:", e.response.data));
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <div>index</div>
      <TextField name="Username" label="Username" variant="outlined" required />
      <TextField
        name="Password"
        label="Password"
        type="password"
        variant="outlined"
        required
      />
      <TextField name="Age" label="Age" variant="outlined" required />
      <TextField name="Gender" label="Gender" variant="outlined" required />
      <TextField name="address" label="Address" variant="outlined" required />
      <TextField
        name="firstname"
        label="Firstname"
        variant="outlined"
        required
      />
      <TextField name="lastname" label="Lastname" variant="outlined" required />
      <TextField name="phone" label="Phone" variant="outlined" required />
      <TextField name="role" label="Role" variant="outlined" required />
      <TextField
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        required
      />
      <Button type="submit">SUBMIT</Button>
    </form>
  );
}
