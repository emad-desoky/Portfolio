"use client";
import { Typography } from "@mui/material";
import SelectArea from "./SelectArea";
import { useState, useEffect } from "react";
import axios from "axios";
import FactArea from "./FactArea";

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
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (selectedCountry)
      axios
        .get(`https://restcountries.com/v3.1/name/${selectedCountry}`)
        .then((res) => setCountry(res.data))
        .catch((e) => console.log(e));
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedRegion)
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
        title={"Regions"}
      />
      <SelectArea
        items={countries}
        selectedItem={selectedCountry}
        handleChange={handleChangeCountry}
        title={"Countries"}
      />
      <FactArea selectedCountry={selectedCountry} facts={country[0]} />
    </>
  );
}
