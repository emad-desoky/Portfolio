import React, { useState } from "react";
import axios from "axios";
import { v4 } from "uuid";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const [role, setRole] = useState("");
  const [formFields, setFormFields] = useState({});

  const onRoleChange = (event) => {
    setRole(event.target.value);
    setFormFields({});
  };

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
    <Container maxWidth="sm">
      <Paper className={styles.paper} elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Registration
        </Typography>
        <form onSubmit={onSubmitHandle} className={styles.form}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              onChange={onRoleChange}
              label="Role"
              name="Role"
              className={styles.selectInput}
            >
              <MenuItem value="Patient">Patient</MenuItem>
              <MenuItem value="Doctor">Doctor</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
          {role === "Patient" && (
            <>
              <TextField
                name="patientUsername"
                label="Patient Username"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="phone"
                label="Phone Number"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="age"
                label="Age"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="heardAboutUs"
                label="Where did you hear about us?"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="dentalHistory"
                label="Dental History"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                multiline
                rows={4}
                className={styles.selectInput}
              />
            </>
          )}
          {role === "Doctor" && (
            <>
              <TextField
                name="doctorUsername"
                label="Doctor Username"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="phone"
                label="Phone Number"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
            </>
          )}
          {role === "Admin" && (
            <>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
              <TextField
                name="phone"
                label="Phone Number"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className={styles.selectInput}
              />
            </>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={styles.submitButton}
          >
            SUBMIT
          </Button>
          <Button
            onClick={() => router.push("./Login")}
            variant="contained"
            color="secondary"
            fullWidth
            className={styles.submitButton}
          >
            LOGIN
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
