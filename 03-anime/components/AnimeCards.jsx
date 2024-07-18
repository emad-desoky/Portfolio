"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
export default function AnimeCards({ animeShow }) {
  useEffect(() => {
    console.log(animeShow);
  }, [animeShow]);

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={animeShow.images.jpg.image_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {animeShow.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {animeShow.rating}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
