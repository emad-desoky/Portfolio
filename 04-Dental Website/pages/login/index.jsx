import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  Box,
  Snackbar,
  Alert,
  Grid,
  Divider,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./LoginForm.module.css";
import ClinicNavBar from "@/components/NavBar/ClinicNavBar";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", { username, password })
      .then((res) => {
        const role = res.data.role;
        const userData = res.data; // Assuming the API response contains user data

        localStorage.setItem("user", JSON.stringify(userData));

        setOpenSnackbar(true);
        setMessage(res.data.message);
        if (role === "Doctor") {
          router.push("/dashboard-doctor");
        } else if (role === "Patient") {
          router.push("./");
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
      <ClinicNavBar />
      <Box className={styles.container}>
        <Box component="form" onSubmit={handleSubmit} className={styles.form}>
          <Grid container spacing={2}>
            <Grid item xs={30} sm={7} className={styles.formContainer}>
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
                className={styles.textField}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                className={styles.textField}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={keepLoggedIn}
                    onChange={(e) => setKeepLoggedIn(e.target.checked)}
                    color="primary"
                  />
                }
                label="Keep me logged in"
                className={styles.checkboxContainer}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={styles.submitButton}
              >
                Login
              </Button>
              <Typography
                variant="body2"
                className={styles.forgotPassword}
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </Typography>
              {message && (
                <Typography variant="body2" className={styles.message}>
                  {message}
                </Typography>
              )}
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={styles.divider}
            />
            <img
              src="/images/teeth.png"
              alt="Clinic Logo"
              className={styles.logo}
            />
          </Grid>
          <Typography
            variant="body2"
            className={styles.registerLink}
            onClick={() => router.push("/registration")}
          >
            Not a member? Register now
          </Typography>
        </Box>
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
