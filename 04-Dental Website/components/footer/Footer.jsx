import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid container spacing={4}>
          {/* Hours Section */}
          <Grid item xs={12} sm={2}>
            <Box className={styles.footerSection}>
              <Typography variant="h6" className={styles.sectionTitle}>
                Hours
              </Typography>
              <Typography variant="body2" className={styles.sectionContent}>
                Monday – Thursday
                <br />
                8am – 5pm
                <br />
                Friday
                <br />
                By appointment
              </Typography>
            </Box>
          </Grid>

          {/* Social Section */}
          <Grid item xs={12} sm={2}>
            <Box className={styles.footerSection}>
              <Typography variant="h6" className={styles.sectionTitle}>
                Social
              </Typography>
              <Box className={styles.socialIcons}>
                <IconButton
                  component={Link}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className={styles.icon} />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className={styles.icon} />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className={styles.icon} />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={2}>
            <Box className={styles.footerSection}>
              <Typography variant="h6" className={styles.sectionTitle}>
                Contact Us
              </Typography>
              <Link
                href="mailto:your.email@example.com"
                className={styles.contactLink}
              >
                <FaEnvelope className={styles.icon} /> your.email@example.com
              </Link>
            </Box>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} sm={4}>
            <Box className={styles.footerSection}>
              <Typography variant="h6" className={styles.sectionTitle}>
                Services
              </Typography>
              <Typography
                variant="subtitle1"
                className={styles.serviceCategory}
              >
                COSMETIC & ELECTIVE
              </Typography>
              <ul className={styles.serviceList}>
                <li>Cosmetic Dentistry</li>
                <li>Digital Smile Design</li>
                <li>Porcelain Veneers</li>
                <li>Teeth Whitening</li>
                <li>Orthodontics / Clear Braces / Clear Aligners</li>
                <li>Smile Makeover</li>
                <li>Gum Lift</li>
                <li>Bonding / Resin Veneers</li>
              </ul>
              <Typography
                variant="subtitle1"
                className={styles.serviceCategory}
              >
                GENERAL & PREVENTIVE
              </Typography>
              <ul className={styles.serviceList}>
                <li>Preventive & Routine Care</li>
                <li>Implants</li>
                <li>Crowns</li>
              </ul>
            </Box>
          </Grid>

          {/* Location Section */}
          <Grid item xs={12} sm={2}>
            <Box className={styles.footerSection}>
              <Typography variant="h6" className={styles.sectionTitle}>
                Location
              </Typography>
              <Typography variant="body2" className={styles.sectionContent}>
                <FaMapMarkerAlt className={styles.icon} /> Nasr City, Cairo,
                Egypt
              </Typography>
            </Box>
          </Grid>

          {/* Privacy Section */}
          <Grid item xs={12} sm={2}>
            <Box className={styles.footerSection}>
              <Typography variant="h6" className={styles.sectionTitle}>
                Privacy
              </Typography>
              <Link href="/privacy-policy" className={styles.privacyLink}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider className={styles.divider} />

        <Box className={styles.bottomSection}>
          <Typography variant="body2" align="center" color="textSecondary">
            &copy; {new Date().getFullYear()} Your Dental Clinic. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
