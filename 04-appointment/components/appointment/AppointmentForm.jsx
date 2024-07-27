import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import styles from "./AppointmentForm.module.css";
import { v4 } from "uuid";
import axios from "axios";
import ClinicNavBar from "../NavBar/ClinicNavBar";
import ReviewForm from "../review/ReviewForm";

export default function AppointmentForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setErrorMessage("Please login or register to submit the form.");
      return;
    }

    const formData = new FormData(e.target);
    const appointment = Object.fromEntries(formData.entries());
    appointment.id = v4();
    appointment.status = "scheduled";

    console.log("Form Data Submitted:", appointment);

    axios
      .post("/api/appointments", appointment)
      .then((res) => console.log("Response:", res))
      .catch((e) => console.error("Error:", e.response.data));
  };

  return (
    <>
      <ClinicNavBar />
      <div className={styles.container}>
        <div className={styles.formSection}>
          <form onSubmit={onSubmitHandle} className={styles.formContainer}>
            <h1>Appointment Form</h1>
            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
            )}
            <TextField
              name="patientName"
              label="Patient Name"
              className={styles.inputField}
              variant="outlined"
              required
            />
            <TextField
              name="appointmentDate"
              label="Appointment Date"
              type="date"
              className={styles.inputField}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
            />
            <FormControl className={styles.inputField} variant="outlined">
              <InputLabel>Procedure</InputLabel>
              <Select name="procedure" required>
                <MenuItem value="scaling">Scaling</MenuItem>
                <MenuItem value="restorations">Restorations</MenuItem>
                <MenuItem value="root canal treatments">
                  Root Canal Treatments
                </MenuItem>
                <MenuItem value="surgical procedures">
                  Surgical Procedures (Extractions, etc)
                </MenuItem>
                <MenuItem value="pedodontics">Pedodontics</MenuItem>
                <MenuItem value="check up">Check Up</MenuItem>
                <MenuItem value="implants">Implants</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={styles.inputField} variant="outlined">
              <InputLabel>Dentist</InputLabel>
              <Select name="dentist" required>
                <MenuItem value="Doctor John">Doctor John</MenuItem>
                <MenuItem value="Doctor William">Doctor William</MenuItem>
                <MenuItem value="Doctor May">Doctor May</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="contactPhone"
              label="Contact Phone Number"
              className={styles.inputField}
              variant="outlined"
              required
            />
            <Button
              type="submit"
              className={styles.submitButton}
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </div>
        <ReviewForm isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
}
