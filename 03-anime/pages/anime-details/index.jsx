"use client";

import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./index.module.css";

export default function AnimeDetails() {
  const router = useRouter();
  const { id } = router.query; // Get the id from the query parameters
  const [animes, setAnimes] = useState(
    JSON.parse(localStorage.getItem("animeShows")) || []
  );

  return (
    <div className={styles.container}>
      {animes
        .filter((anime) => anime.mal_id == id)
        .map((anime) => {
          return (
            <>
              <Typography className={styles.animeTitle} variant="h4">
                {" "}
                {anime.title}
              </Typography>
              <img
                className={styles.animeImage}
                src={anime.images.jpg.large_image_url}
              />
              <Typography className={styles.animeRating} variant="h6">
                {anime.rating}
              </Typography>
              <Typography className={styles.animeSynopsis}>
                {anime.synopsis}
              </Typography>
            </>
          );
        })}
    </div>
  );
}
