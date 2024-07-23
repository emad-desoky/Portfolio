import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./Form.module.css";
import { v4 } from "uuid";
import axios from "axios";

export default function Form() {
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const appointment = Object.fromEntries(formData.entries());
    appointment.id = v4();
    appointment.status = "scheduled";

    console.log("Form Data Submitted:", appointment); // Log the appointment data

    axios
      .post("/api/appointments", appointment)
      .then((res) => console.log("Response:", res))
      .catch((e) => console.error("Error:", e.response.data)); // Log the error response
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandle} className={styles.formContainer}>
        <h1>Appointment Form</h1>
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
        <TextField
          name="dentist"
          label="Dentist"
          className={styles.inputField}
          variant="outlined"
          required
        />
        <TextField
          name="procedure"
          label="Procedure"
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
  );
}
