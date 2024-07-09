import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function AddPatientPage({
  addOrUpdate,
  setPatients,
  selectedPatient,
  handleClose,
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (selectedPatient) {
      setFirstname(selectedPatient.firstname);
      setLastname(selectedPatient.lastname);
      setEmail(selectedPatient.email);
    }
  }, [selectedPatient]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedPatient = { firstname, lastname, email };

    if (addOrUpdate === "Update") {
      setPatients((prev) =>
        prev.map((p) =>
          p.email === selectedPatient.email ? updatedPatient : p
        )
      );
    } else {
      setPatients((prev) => [...prev, updatedPatient]);
    }

    handleClose();
  };

  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Card>
          <Grid item md={15}>
            <Typography variant="h4" margin={"2rem"}>
              {addOrUpdate} Patient
            </Typography>
          </Grid>
          <Card sx={{ padding: "0rem 10rem 2rem 10rem" }}>
            <Grid item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Grid container justifyContent={"left"} rowGap={5}>
                  <TextField
                    type="text"
                    name="firstname"
                    id="firstname"
                    label="Firstname"
                    variant="outlined"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <TextField
                    type="text"
                    name="lastname"
                    id="lastname"
                    label="Lastname"
                    variant="outlined"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <TextField
                    type="email"
                    name="email"
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" variant="contained" color="success">
                    Submit
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Card>
        </Card>
      </Grid>
    </Container>
  );
}
