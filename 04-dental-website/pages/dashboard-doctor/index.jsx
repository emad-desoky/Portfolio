import { Typography, Grid, Card, IconButton, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditStatusDialog from "@/components/dashboards/Dialog";
import styles from "./AdminPanel.module.css";

export default function AdminPanel() {
  const [data, setData] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/appointments")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  const handlePatientDelete = (id) => {
    axios
      .delete("/api/appointments", { params: { id } })
      .then(() =>
        setData((prev) => prev.filter((appointment) => appointment.id !== id))
      )
      .catch((e) => console.log(e));
  };

  const handleStatusUpdate = (updatedAppointment) => {
    axios
      .put("/api/appointments", updatedAppointment)
      .then(() =>
        setData((prev) =>
          prev.map((p) =>
            p.id === updatedAppointment.id
              ? { ...p, status: updatedAppointment.status }
              : p
          )
        )
      )
      .catch((e) => console.log(e));

    handleClose();
  };

  const handleClickOpen = (appointment) => {
    setSelectedAppointment(appointment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h1" className={styles.header}>
        Appointments Details
      </Typography>
      <Grid container columnGap={5} rowGap={3}>
        {data.map((a) => (
          <Card key={a.id} className={styles.card}>
            <Typography className={styles.typography}>
              {a.patientName}
            </Typography>
            <Typography className={styles.typography}>
              {a.appointmentDate}
            </Typography>
            <Typography className={styles.typography}>{a.dentist}</Typography>
            <Typography className={styles.typography}>{a.procedure}</Typography>
            <div className={styles.statusContainer}>
              <Typography className={styles.typography}>{a.status}</Typography>
              <IconButton
                className={styles.iconButton}
                onClick={() => handleClickOpen(a)}
              >
                <EditIcon />
              </IconButton>
            </div>
            <Grid
              container
              justifyContent="space-between"
              className={styles.gridContainer}
            >
              <IconButton
                className={styles.iconButton}
                onClick={() => handlePatientDelete(a.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Card>
        ))}
      </Grid>
      {selectedAppointment && (
        <EditStatusDialog
          open={open}
          handleClose={handleClose}
          handleSubmit={handleStatusUpdate}
          appointment={selectedAppointment}
        />
      )}
    </Container>
  );
}
