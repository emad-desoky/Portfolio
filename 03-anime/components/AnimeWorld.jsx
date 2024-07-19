"use client";

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnimeCards from "./AnimeCards";
import axios from "axios";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import styles from "./AnimeWorld.module.css";

export default function AnimeWorld() {
  const [animeShows, setAnimeShows] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAnimeShows = JSON.parse(localStorage.getItem("animeShows"));
      if (storedAnimeShows && storedAnimeShows.length) {
        // If data is found in local storage, update the state and set loading to false
        setAnimeShows(storedAnimeShows);
      } else {
        axios
          .get(
            "https://gist.githubusercontent.com/abdalabaaji/8a4c9f9aabddbab384693f746dfeab46/raw/ea2497811bc355bb737b5d8630a36bee7cbab303/animes.json"
          )
          .then((res) => {
            setAnimeShows(res.data); // Update state with fetched data
            localStorage.setItem("animeShows", JSON.stringify(res.data)); // Save data to local storage
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, []);
  const handleAnimeDelete = (id) => {
    setAnimeShows((prev) => {
      const newArr = prev.filter((p) => p.mal_id !== id);
      localStorage.setItem("animeShows", JSON.stringify(newArr));
      return newArr;
    });
  };
  return (
    <div className={styles.fadeIn}>
      <Typography variant="h1">AnimeWorld</Typography>
      <Container className={styles.container}>
        <Grid container className={styles.grid}>
          {animeShows &&
            animeShows.map((anime) => {
              return (
                <AnimeCards
                  key={anime.mal_id}
                  animeShow={anime}
                  handleAnimeDelete={() => handleAnimeDelete(anime.mal_id)}
                />
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}
