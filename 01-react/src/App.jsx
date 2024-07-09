import { Container, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AddPatientPage from "./components/AddPatientPage";
import ListPatientsPage from "./components/ListPatientsPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

function createData(firstname, lastname, email) {
  return { firstname, lastname, email };
}

const rows = [
  createData("John", "Doe", "john.doe@example.com"),
  createData("Jane", "Smith", "jane.smith@example.com"),
  createData("Alice", "Johnson", "alice.johnson@example.com"),
  createData("Bob", "Brown", "bob.brown@example.com"),
  createData("Charlie", "Davis", "charlie.davis@example.com"),
];

export default function App() {
  const location = useLocation();
  const path = location.pathname;

  // Determine the tab based on the current path
  let tab = "home";
  if (path.includes("add")) {
    tab = "add";
  } else if (path.includes("list")) {
    tab = "list";
  }

  const homeTab = (
    <Container>
      <Grid container justifyContent={"center"}>
        <Typography variant="h3" textAlign={"center"}>
          Welcome to your first real assignment
        </Typography>
      </Grid>
    </Container>
  );
  const [patients, setPatients] = useState(rows);

  return (
    <>
      <ResponsiveAppBar tab={tab} />
      <Routes>
        <Route path="/" element={homeTab} />
        <Route
          path="/add"
          element={
            <AddPatientPage addOrUpdate="Add" setPatients={setPatients} />
          }
        />
        <Route
          path="/list"
          element={
            <ListPatientsPage patients={patients} setPatients={setPatients} />
          }
        />
      </Routes>
    </>
  );
}
