"use client";

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnimeCards from "./AnimeCards";
import axios from "axios";
export default function AnimeWorld() {
  const [animeShows, setAnimeShows] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/abdalabaaji/8a4c9f9aabddbab384693f746dfeab46/raw/ea2497811bc355bb737b5d8630a36bee7cbab303/animes.json"
      )
      .then((res) => {
        setAnimeShows(res.data);
      })

      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Typography>AnimeWorld</Typography>
      {animeShows &&
        animeShows.map((anime) => {
          return <AnimeCards animeShow={anime} />;
        })}
    </>
  );
}
