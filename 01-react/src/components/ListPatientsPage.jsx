import React from "react";
import { Container, Grid } from "@mui/material";
import CustomizedTables from "./CustomizedTables";

export default function ListPatientsPage({ patients, setPatients }) {
  return (
    <>
      <Container>
        <Grid container>
          <CustomizedTables patients={patients} setPatients={setPatients} />
        </Grid>
      </Container>
    </>
  );
}
