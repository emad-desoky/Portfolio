import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./PrimarySearchAppBar.module.css";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function PrimarySearchAppBar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check for user data in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("./login"); // Redirect to login page after logout
  };

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
            onClick={() => router.push("./")}
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

            <Button
              onClick={() => router.push("./our-services")}
              color="inherit"
              className={styles.navButton}
            >
              Our Services
            </Button>
            <Button color="inherit" className={styles.navButton}>
              Contact Us
            </Button>
          </Box>

          {/* Conditional rendering based on user authentication */}
          <Box className={styles.authButtons}>
            {user ? (
              <>
                <Typography variant="h6" className={styles.welcomeText}>
                  Welcome, {user.username}!
                </Typography>
                <Button
                  onClick={handleLogout}
                  color="inherit"
                  variant="outlined"
                  className={styles.authButton}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => router.push("./registration")}
                  color="inherit"
                  variant="outlined"
                  className={styles.authButton}
                >
                  Registration
                </Button>
                <Button
                  onClick={() => router.push("./login")}
                  color="inherit"
                  variant="outlined"
                  className={styles.authButton}
                >
                  Login
                </Button>
              </>
            )}
          </Box>

          {/* Menu icon for small screens */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
