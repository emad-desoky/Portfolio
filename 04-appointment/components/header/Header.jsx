import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./Header.module.css"; // Import the CSS module
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <>
      <Box className={styles.headerContainer}>
        <Box className={styles.imageContainer}>
          <img
            src="https://www.the-dentist.co.uk/media/gfhfcmfg/college-of-general-dentistry-launches-professional-framework.jpg"
            alt="Dentist"
            className={styles.image}
          />
        </Box>
        <Box className={styles.infoContainer}>
          <Typography variant="h1" className={styles.infoText}>
            {infoSlides[currentSlide]}
          </Typography>
          <Button
            onClick={() => router.push("./appointments")}
            className={styles.bookNowButton}
            variant="contained"
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>

      <Box className={styles.cardsSection}>
        <Box className={styles.cardsContainer}>
          <Box className={styles.card}>
            <img
              src="https://www.dentistrytoday.com/wp-content/uploads/2019/05/03fb30e34782bdae6b554b8ac2d788f6.jpg" // Replace with the actual URL
              alt="General Dentistry"
              className={styles.cardImage}
            />
            <Typography variant="h6" className={styles.cardTitle}>
              General
            </Typography>
            <Typography variant="body2" className={styles.cardContent}>
              Everything you expect and then some. Cleanings, fillings, and
              x-rays are just the beginning.
            </Typography>
            <Button
              onClick={() => router.push("./general-dentistry")}
              className={styles.cardButton}
              variant="contained"
            >
              ABOUT GENERAL DENTISTRY
            </Button>
          </Box>

          <Box className={styles.card}>
            <img
              src="https://fermeliadental.com/wp-content/uploads/2019/05/benefits-of-regular-dental-visits-1080x675.jpeg" // Replace with the actual URL
              alt="Cosmetic Dentistry"
              className={styles.cardImage}
            />
            <Typography variant="h6" className={styles.cardTitle}>
              Cosmetic
            </Typography>
            <Typography variant="body2" className={styles.cardContent}>
              Discover your “wow!” factor. Invisalign, veneers, and in-office or
              take-home teeth whitening.
            </Typography>
            <Button
              onClick={() => router.push("./cosmetic-dentistry")}
              className={styles.cardButton}
              variant="contained"
            >
              ABOUT COSMETIC DENTISTRY
            </Button>
          </Box>

          <Box className={styles.card}>
            <img
              src="https://content.jdmagicbox.com/comp/service_catalogue/dentists-attr-elderly-dental-treatment-den461-5.jpg" // Replace with the actual URL
              alt="Oral Surgery"
              className={styles.cardImage}
            />
            <Typography variant="h6" className={styles.cardTitle}>
              Surgical
            </Typography>
            <Typography variant="body2" className={styles.cardContent}>
              We can fix anything. Our dentists repair damaged or lost teeth
              with cutting-edge implants and more.
            </Typography>
            <Button
              onClick={() => router.push("./oral-surgery")}
              className={styles.cardButton}
              variant="contained"
            >
              ABOUT ORAL SURGERY
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
