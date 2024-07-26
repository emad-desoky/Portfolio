import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import styles from "./Form.module.css";
import { v4 } from "uuid";
import axios from "axios";
import ClinicNavBar from "../NavBar/ClinicNavBar";
import StarIcon from "@mui/icons-material/Star";

export default function Form() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [reviews, setReviews] = useState([
    { id: v4(), user: "Jane Doe", text: "Great service!", stars: 5 },
    { id: v4(), user: "Jane Doe", text: "Great service!", stars: 5 },
    { id: v4(), user: "Jane Doe", text: "Great service!", stars: 5 },
    { id: v4(), user: "Jane Doe", text: "Great service!", stars: 5 },
    { id: v4(), user: "Jane Doe", text: "Great service!", stars: 5 },
    { id: v4(), user: "Jane Doe", text: "Great service!", stars: 5 },
    // ...other reviews
  ]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    // Check if there's a user in local storage to determine login status
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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setErrorMessage("Please login to leave a review.");
      return;
    }

    const review = {
      id: v4(),
      user: "Current User",
      text: newReview,
      stars: newRating,
    };
    setReviews([...reviews, review]);
    setNewReview("");
    setNewRating(0);
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
        <div className={styles.reviewSection}>
          <h2>Reviews</h2>
          <div className={styles.reviewList}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.review}>
                <strong className={styles.review}>{review.user}</strong>:{" "}
                {review.text}
                <div className={styles.stars}>
                  {Array(review.stars)
                    .fill()
                    .map((_, i) => (
                      <StarIcon key={i} className={styles.starIcon} />
                    ))}
                </div>
              </div>
            ))}
          </div>
          {isLoggedIn ? (
            <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
              <TextField
                label="Add a review"
                variant="outlined"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className={styles.reviewInput}
                required
              />
              <FormControl className={styles.ratingField}>
                <InputLabel>Rating</InputLabel>
                <Select
                  value={newRating}
                  onChange={(e) => setNewRating(e.target.value)}
                  required
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <MenuItem key={rating} value={rating}>
                      {rating}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                className={styles.submitButton}
              >
                Submit
              </Button>
            </form>
          ) : (
            <div className={styles.loginMessage}>
              Please log in to leave a review.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
