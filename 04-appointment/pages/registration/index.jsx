import React, { useEffect, useState } from "react";
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
  Container,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import styles from "./RegistrationForm.module.css";
import { useRouter } from "next/router";
import ClinicNavBar from "@/components/NavBar/ClinicNavBar";

const imageDetails = [
  {
    src: "https://www.beautyandtheteeth.com/wp-content/uploads/2023/03/Slide7.jpg",
    text: "VENEERS CASE (HOLLYWOOD SMILE)",
  },
  {
    src: "https://craftsmilesclt.com/wp-content/uploads/2024/04/veneers-13.jpg",
    text: "DIRECT COMPOSITE VENEERS",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaz9_03jKc43pWVEJa7ic7Yl6HFwR6422lqZhFd0DyMB6TwvZOtew-pkrOOC5bOxnlk4&usqp=CAU",
    text: "FULL CROWNS AND ENDOTREATMENTS CASE",
  },
  // Add more image and text pairs as needed
];

export default function RegistrationForm() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const router = useRouter(); // For routing
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState("fadeIn"); // State for fade animation

  useEffect(() => {
    const changeImage = () => {
      setFade("fadeOut"); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageDetails.length);
        setFade("fadeIn"); // Start fade in
      }, 500); // Duration of fade-out animation
    };

    // Set interval to change image every 4 seconds
    const intervalId = setInterval(changeImage, 4000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const onRoleChange = (event) => {
    setRole(event.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const users = Object.fromEntries(formData.entries());
    users.id = v4();

    axios
      .post("/api/users", users)
      .then((res) => {
        setSnackbarMessage("Registration successful!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setLoading(false);
      })
      .catch((e) => {
        setSnackbarMessage(`Error: ${e.response?.data || "Unknown error"}`);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
        setLoading(false);
      });
  };

  return (
    <>
      <ClinicNavBar />
      <div className={styles.pageContainer}>
        <div className={styles.formContainer}>
          <Container maxWidth="sm">
            <Paper className={styles.form} elevation={3}>
              <Typography
                className={styles.title}
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
              >
                Registration
              </Typography>
              <form onSubmit={onSubmitHandle}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={role}
                    onChange={onRoleChange}
                    label="Role"
                    name="Role"
                  >
                    <MenuItem value="Patient">Patient</MenuItem>
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </FormControl>

                {/* Conditional Fields */}
                {role === "Patient" && (
                  <>
                    <TextField
                      name="patientUsername"
                      label="Patient Username"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="phone"
                      label="Phone Number"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="age"
                      label="Age"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="heardAboutUs"
                      label="Where did you hear about us?"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
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
                    />
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="phone"
                      label="Phone Number"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
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
                    />
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="phone"
                      label="Phone Number"
                      variant="outlined"
                      required
                      fullWidth
                      margin="normal"
                    />
                  </>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Submit"
                  )}
                </Button>
                <Button
                  onClick={() => router.push("/login")}
                  variant="outlined"
                  color="secondary"
                  fullWidth
                >
                  Cancel
                </Button>
              </form>
            </Paper>
          </Container>
        </div>
        <div className={styles.carouselContainer}>
          <Card className={`${styles.carouselCard} ${styles[fade]}`}>
            <img
              src={imageDetails[currentIndex].src}
              alt={`Image ${currentIndex + 1}`}
              className={`${styles.carouselImage} ${styles[fade]}`}
            />
            <CardContent className={styles.imageText}>
              <Typography variant="caption" align="center">
                {imageDetails[currentIndex].text}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={snackbarSeverity}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
