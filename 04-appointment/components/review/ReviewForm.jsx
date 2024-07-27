import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { v4 } from "uuid";
import StarIcon from "@mui/icons-material/Star";
import styles from "../appointment/AppointmentForm.module.css";
import axios from "axios";

export default function ReviewForm() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
    // Fetch reviews from the database when the component mounts
    axios
      .get("/api/reviews")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((e) => console.error("Error fetching reviews:", e));
  }, []);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setErrorMessage("Please login or register to submit the form.");
      return;
    }

    const review = {
      id: v4(),
      user: username,
      text: newReview,
      stars: newRating,
    };

    axios
      .post("/api/reviews", review)
      .then((res) => {
        setReviews((prevReviews) => [...prevReviews, review]);
        setNewReview("");
        setNewRating(0);
      })
      .catch((e) => console.error("Error submitting review:", e.response.data));
  };

  return (
    <div className={styles.reviewSection}>
      <h2>Reviews</h2>
      <div className={styles.reviewList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.review}>
            <strong>{review.user}</strong>: {review.text}
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
        <form onSubmit={onSubmitHandle} className={styles.reviewForm}>
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
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </form>
      ) : (
        <div className={styles.loginMessage}>
          Please log in to leave a review.
        </div>
      )}
    </div>
  );
}
