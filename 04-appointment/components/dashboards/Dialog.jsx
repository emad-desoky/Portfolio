import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { Fragment, useState } from "react";

export default function EditStatusDialog({
  open,
  handleClose,
  handleSubmit,
  appointment,
}) {
  const [selectedStatus, setSelectedStatus] = useState(appointment.status);

  return (
    <Fragment>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>UPDATE</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Patient Status</DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">STATUS</InputLabel>
              <Select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                fullWidth
                autoFocus
                label="maxWidth"
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Delayed">Delayed</MenuItem>
                <MenuItem value="Single Visit Done">Single Visit Done</MenuItem>
                <MenuItem value="Multiple Visits Done">
                  Multiple Visits Done
                </MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={() =>
              handleSubmit({ ...appointment, status: selectedStatus })
            }
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
