import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect } from "react";
import styles from "./FactArea.module.css";

export default function FactArea({ selectedCountry, facts }) {
  useEffect(() => {
    console.log(facts);
  }, [facts]);

  if (!facts || typeof facts !== "object" || Array.isArray(facts)) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.factArea}>
      <div className={styles.factTitle}>Fact About: {selectedCountry}</div>
      {facts.flags && (
        <img
          src={facts.flags.png}
          alt={`Flag of ${selectedCountry}`}
          className={styles.flagImage}
        />
      )}
      <TableContainer className={styles.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className={styles.tableHead}>
            <TableRow>
              <TableCell className={styles.tableHeadCell}>
                Official Country Name
              </TableCell>
              <TableCell className={styles.tableHeadCell}>
                Capital City
              </TableCell>
              <TableCell className={styles.tableHeadCell}>Population</TableCell>
              <TableCell className={styles.tableHeadCell}>Region</TableCell>
              <TableCell className={styles.tableHeadCell}>Subregion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={styles.tableRow}>
              <TableCell className={styles.tableCell}>
                {facts.name?.common ?? "N/A"}
              </TableCell>
              <TableCell className={styles.tableCell}>
                {facts.capital ? facts.capital[0] : "N/A"}
              </TableCell>
              <TableCell className={styles.tableCell}>
                {facts.population ?? "N/A"}
              </TableCell>
              <TableCell className={styles.tableCell}>
                {facts.region ?? "N/A"}
              </TableCell>
              <TableCell className={styles.tableCell}>
                {facts.subregion ?? "N/A"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
