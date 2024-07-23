import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./Header.module.css"; // Import the CSS module

const infoSlides = [
  "Expert Dental Care for a Brighter Smile",
  "Comprehensive Teeth Whitening Services",
  "Advanced Techniques in Root Canals",
  "High-Quality Dental Implants and Restorations",
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.imageContainer}>
        <img
          src="https://t4.ftcdn.net/jpg/03/32/08/05/360_F_332080542_RRC7xkkDK2Zext79CHvIkHdAChjVQeCi.jpg"
          alt="Dentist"
          className={styles.image}
        />
      </Box>
      <Box className={styles.infoContainer}>
        <Typography variant="h1" className={styles.infoText}>
          {infoSlides[currentSlide]}
        </Typography>
        <Button className={styles.bookNowButton} variant="contained">
          BOOK NOW
        </Button>
      </Box>
    </Box>
  );
}
