import { styled } from "@mui/material/styles";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { useState } from "react";
import AddPatientPage from "./AddPatientPage";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ patients, setPatients }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const deletePatient = (email) => {
    setPatients((prev) => {
      return prev.filter((p) => p.email !== email);
    });
  };

  const updatePatient = (patient) => {
    setSelectedPatient(patient);
    setIsEditing(true);
  };

  const handleClose = () => {
    setSelectedPatient(null);
    setIsEditing(false);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ marginBottom: "2rem" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Firstname</StyledTableCell>
              <StyledTableCell>Lastname</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  {row.firstname}
                </StyledTableCell>
                <StyledTableCell>{row.lastname}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    aria-label="update"
                    color="primary"
                    onClick={() => updatePatient(row)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => deletePatient(row.email)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isEditing && (
        <AddPatientPage
          addOrUpdate="Update"
          setPatients={setPatients}
          selectedPatient={selectedPatient}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
