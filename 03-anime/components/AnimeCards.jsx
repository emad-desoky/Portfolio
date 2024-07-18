"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./AnimeWorld.module.css";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function AnimeCards({ animeShow }) {
  const router = useRouter();

  const displayAnimeDetails = (id) => {
    router.push({
      pathname: "/anime-details",
      query: { id: animeShow.mal_id }, // Passing the id as a query parameter
    });
  };

  useEffect(() => {
    console.log(animeShow);
  }, [animeShow]);

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={animeShow.images.jpg.image_url}
          title={animeShow.title}
        />
        <CardContent className={styles.cardContent}>
          <Typography
            className={styles.typographyTitle}
            gutterBottom
            variant="h5"
            component="div"
          >
            {animeShow.title}
          </Typography>
          <Typography
            className={styles.typographyBody}
            variant="body2"
            color="text.secondary"
          >
            {animeShow.rating}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <IconButton
            className={styles.iconButton}
            onClick={() => displayAnimeDetails()}
          >
            <MoreHorizIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
