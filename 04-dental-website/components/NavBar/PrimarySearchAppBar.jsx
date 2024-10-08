import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./PrimarySearchAppBar.module.css";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function PrimarySearchAppBar() {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // For menu anchor
  const open = Boolean(anchorEl);
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

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    router.push(path);
    handleMenuClose();
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

        {/* Menu icon for small screens */}
        <IconButton
          edge="start"
          className={styles.menuIcon}
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

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
        </Box>

        {/* Menu for small screens */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          className={styles.menu}
        >
          <MenuItem onClick={() => handleNavigation("./appointments")}>
            BOOK NOW
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("./our-doctors")}>
            Our Doctors
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("./location")}>
            Location
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("./about-us")}>
            About Us
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("./our-services")}>
            Our Services
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("./contact-us")}>
            Contact Us
          </MenuItem>
          {user ? (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          ) : (
            <>
              <MenuItem onClick={() => handleNavigation("./registration")}>
                Registration
              </MenuItem>
              <MenuItem onClick={() => handleNavigation("./login")}>
                Login
              </MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
