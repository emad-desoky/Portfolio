import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", { username, password })
      .then((res) => {
        console.log(res.data.role);
        const role = res.data.role;
        setOpenSnackbar(true);
        setMessage(res.data.message);
        if (role === "Doctor") {
          router.push("/dashboard-doctor");
        } else if (role === "Patient") {
          router.push("/dashboard-patient");
        } else if (role === "Admin") {
          router.push("/dashboard-admin");
        }
        return;
      })
      .catch((error) => {
        console.error(error);
        setMessage("Login failed. Please try again.");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="h5" className={styles.title}>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          className={styles.submitButton}
        >
          Login
        </Button>
        {message && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={styles.message}
          >
            {message}
          </Typography>
        )}
      </Box>
      <Snackbar
        autoHideDuration={1500}
        onClose={handleClose}
        open={openSnackbar}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
