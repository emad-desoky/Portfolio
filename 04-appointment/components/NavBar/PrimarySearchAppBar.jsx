import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./PrimarySearchAppBar.module.css";
import { useRouter } from "next/router";

export default function PrimarySearchAppBar() {
  const router = useRouter();
  return (
    <AppBar className={styles.appBar} position="fixed">
      <Toolbar className={styles.toolbar}>
        {/* Logo on the left */}
        <Box className={styles.logo}>
          <img
            src={"./images/teeth.png"}
            alt="Dental Clinic Logo"
            width={70}
            height={70}
          />
        </Box>

        {/* Container for navigation items and auth buttons */}
        <Box className={styles.rightItems}>
          {/* Navigation items in the center */}
          <Box className={styles.navItems}>
            <Button
              onClick={() => router.push("./appointments")}
              color="inherit"
              className={styles.navButton}
            >
              BOOK NOW
            </Button>
            <Button color="inherit" className={styles.navButton}>
              Our Doctors
            </Button>
            <Button color="inherit" className={styles.navButton}>
              Location
            </Button>
            <Button color="inherit" className={styles.navButton}>
              About Us
            </Button>
            <Button color="inherit" className={styles.navButton}>
              Services
            </Button>
            <Button color="inherit" className={styles.navButton}>
              Special Offers
            </Button>
            <Button color="inherit" className={styles.navButton}>
              Contact Us
            </Button>
          </Box>

          {/* Registration and Login buttons on the right */}
          <Box className={styles.authButtons}>
            <Button
              onClick={() => router.push("./registration")}
              color="inherit"
              variant="outlined"
              className={styles.authButton}
            >
              Registration
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              className={styles.authButton}
            >
              Login
            </Button>
          </Box>

          {/* Menu icon for small screens */}
          <IconButton
            edge="start"
            className={styles.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
