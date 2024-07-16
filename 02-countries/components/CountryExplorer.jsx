"use client";
import { Typography } from "@mui/material";
import SelectArea from "./SelectArea";
import { useState, useEffect } from "react";
import axios from "axios";
import { common } from "@mui/material/colors";
const regions = [
  "Oceania",
  "Europe",
  "Africa",
  "Americas",
  "Asia",
  "Antarctic",
];
export default function CountryExplorer() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then((res) =>
        setCountries(res.data.map((country) => country.name.common))
      )
      .catch((e) => console.log(e));
  }, [selectedRegion]);

  const handleChangeRegion = (event) => {
    setSelectedRegion(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <Typography variant="h1">CountryExplorer</Typography>
      <SelectArea
        handleChange={handleChangeRegion}
        selectedItem={selectedRegion}
        items={regions}
      />
      <SelectArea
        items={countries}
        selectedItem={selectedCountry}
        handleChange={handleChangeCountry}
      />
    </>
  );
}
