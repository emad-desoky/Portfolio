import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { Typography } from "@mui/material";

export default function ClinicNavBar() {
  return (
    <>
      <Head>
        <title>Dental Clinic</title>
        <meta name="description" content="Dental Clinic Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <PrimarySearchAppBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          padding: { xs: "0 10px", sm: "0 20px" }, // Adjust padding for responsiveness
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#007acc", // Match with the app bar color
            textDecoration: "none",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#ffeb3b", // Highlight color on hover
            },
            fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Adjust font size for responsiveness
          }}
        >
          ELM
        </Typography>
      </Box>
    </>
  );
}
