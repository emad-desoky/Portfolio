import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./PrimarySearchAppBar.module.css";

export default function PrimarySearchAppBar() {
  return (
    <AppBar className={styles.appBar} position="fixed">
      <Toolbar className={styles.toolbar}>
        {/* Logo on the left */}
        <Box className={styles.logo}>
          <img
            src="https://cdn.discordapp.com/attachments/715561417750741013/1265434470727684290/tooth-brush.png?ex=66a17f30&is=66a02db0&hm=889bb7852d0cded295a3d51f6cd0aa69e6ed7fb2ab74a7a4999997b16f8dd8e7&"
            alt="Dental Clinic Logo"
            width={70}
            height={70}
          />
        </Box>

        {/* Container for navigation items and auth buttons */}
        <Box className={styles.rightItems}>
          {/* Navigation items in the center */}
          <Box className={styles.navItems}>
            <Button color="inherit" className={styles.navButton}>
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
