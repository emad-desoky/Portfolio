"use client";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

export default function AnimeDetails() {
  const router = useRouter();
  const { id } = router.query; // Get the id from the query parameters
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAnimeShows = localStorage.getItem("animeShows");
      if (storedAnimeShows) {
        setAnimes(JSON.parse(storedAnimeShows));
      }
    }
  }, []);

  return (
    <>
      <Button onClick={() => router.back()}>Back</Button>

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
    </>
  );
}
