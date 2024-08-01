import { Box, Container, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import Footer from "@/components/footer/Footer";
import ClinicNavBar from "@/components/NavBar/ClinicNavBar";
import { FramerMotion } from "@/components/framer-motion/FramerMotion";
import ServiceCard from "@/pages/our-services/ServiceCard";
import { services } from "@/pages/our-services/services";
import styles from "./SpecialOffer.module.css";

// Updated function to handle various YouTube URL formats
const extractYouTubeVideoId = (url) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/|user\/[^\/]+\/video\/)?([a-zA-Z0-9_-]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : null;
};

export default function OurServices() {
  const sectionsRef = useRef({});

  const scrollToSection = (sectionId) => {
    sectionsRef.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <Box sx={{ bgcolor: "background.default" }}>
        <ClinicNavBar />
        <FramerMotion />
      </Box>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.description}
                onClick={() => scrollToSection(service.id)}
                imageUrl={service.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ py: 4 }}>
          {services.map((service) => (
            <Box
              key={service.id}
              ref={(el) => (sectionsRef.current[service.id] = el)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 4,
                p: 2,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Box sx={{ flex: 1, p: 2 }}>
                <Typography
                  variant="h4"
                  sx={{ mb: 2 }}
                  className={styles.detailsTitle}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.detailsDescription}
                >
                  {service.details}
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2 }} className={styles.videoContainer}>
                {service.videoUrl.includes("youtube.com") ||
                service.videoUrl.includes("youtu.be") ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                      service.videoUrl
                    )}`}
                    title={service.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    controls
                    className={styles.video}
                    src={service.videoUrl}
                  />
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
}
