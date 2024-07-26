import React from "react";
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
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
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

      <Box className={styles.visitUsSection}>
        <Box className={styles.imagesContainer}>
          <img
            src="https://i.pinimg.com/564x/d3/6a/67/d36a676ab7805c355eddfadc0beab80a.jpg" // Replace with actual image URLs
            alt="Dental Clinic 1"
            className={styles.clinicImage}
          />
          <img
            src="https://img.freepik.com/premium-photo/dental-treatment-room-with-sterilized-tools_933496-6663.jpg" // Replace with actual image URLs
            alt="Dental Clinic 2"
            className={styles.clinicImage}
          />
          <img
            src="https://i0.wp.com/www.offthecusp.com/wp-content/uploads/2017/10/under-the-sea-themed-operatory.jpg" // Replace with actual image URLs
            alt="Dental Clinic 3"
            className={styles.clinicImage}
          />
          <img
            src="https://blueappledentalgroup.com/wp-content/uploads/2023/06/header-home.jpg.webp" // Replace with actual image URLs
            alt="Dental Clinic 4"
            className={styles.clinicImage}
          />
        </Box>
        <Box className={styles.textContainer}>
          <Typography variant="h4" className={styles.visitUsTitle}>
            Visit Us
          </Typography>
          <Typography variant="body1" className={styles.visitUsText}>
            We’re conveniently located in the Denver Tech Center area. Find us
            on the 4th floor of the Triad Office Park building. Plenty of free
            parking available.
          </Typography>
          <Typography variant="body1" className={styles.visitUsAddress}>
            5670 Greenwood Plaza Blvd., Suite 404
            <br />
            Greenwood Village, CO 80111
          </Typography>
          <Typography variant="body1" className={styles.visitUsHours}>
            Monday–Thursday: 7AM–3PM
          </Typography>
          <Button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/5670+Greenwood+Plaza+Blvd,+Suite+404,+Greenwood+Village,+CO+80111",
                "_blank"
              )
            }
            className={styles.getDirectionsButton}
          >
            Get Directions
          </Button>
        </Box>
      </Box>
      <Box className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.7401693454184!2d-104.89208368459286!3d39.60668177945741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c79950489b0f3%3A0x6a2a1d1e90cc0a67!2s5670%20Greenwood%20Plaza%20Blvd%2C%20Suite%20404%2C%20Greenwood%20Village%2C%20CO%2080111!5e0!3m2!1sen!2sus!4v1615924819167!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </Box>
    </>
  );
}
