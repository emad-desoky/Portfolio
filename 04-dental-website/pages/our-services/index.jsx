import { Box, Container, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import Footer from "@/components/footer/Footer";
import ClinicNavBar from "@/components/NavBar/ClinicNavBar";
import { FramerMotion } from "@/components/framer-motion/FramerMotion";
import ServiceCard from "@/pages/our-services/ServiceCard";
import styles from "./SpecialOffer.module.css";

// Updated function to handle various YouTube URL formats
const extractYouTubeVideoId = (url) => {
  const regex =
    /(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|user\/[^\/]+\/video\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Services array
const services = [
  {
    id: 1,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our professional teeth whitening services.",
    details:
      "Our teeth whitening treatment uses advanced techniques to remove stains and lighten your teeth. Enjoy a brighter, whiter smile with minimal discomfort and maximum results.",
    videoUrl: "https://www.youtube.com/shorts/HjnHS_rdoY8",
    imageUrl:
      "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/global/article/tooth-whitening-everything-you-need-to-know.jpg",
  },
  {
    id: 2,
    title: "Orthodontics",
    description:
      "Straighten your teeth with braces or aligners for a perfect smile.",
    details:
      "Orthodontic treatments such as braces or clear aligners help correct misaligned teeth and jaws, improving both appearance and function. Our solutions are tailored to meet your specific needs.",
    videoUrl: "https://www.youtube.com/watch?v=yL9cwV5JT4I",
    imageUrl: "https://www.nu-smile.co.za/images/images/orthodontics.jpg",
  },
  {
    id: 3,
    title: "Implants",
    description: "Replace missing teeth with high-quality dental implants.",
    details:
      "Dental implants provide a permanent solution for missing teeth. They offer a natural look and feel, and can restore your ability to chew and speak comfortably.",
    videoUrl: "https://www.youtube.com/watch?v=vjhHnTCSy0U",
    imageUrl:
      "https://www.reboldental.com/wp-content/uploads/2023/02/ThinkstockPhotos-588243262-1024x685.jpg",
  },
  {
    id: 4,
    title: "Root Canal Therapy",
    description: "Save your natural teeth with our root canal treatments.",
    details:
      "Root canal therapy can save a tooth that is badly damaged or infected. The procedure involves removing the damaged tissue, cleaning, and sealing the tooth to prevent further issues.",
    videoUrl: "https://www.youtube.com/watch?v=0s35QCFg7p0",
    imageUrl:
      "https://www.drlinger.com/hubfs/root%20canal%20treatment-078475-edited.jpeg",
  },
  {
    id: 5,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with our cosmetic dental procedures.",
    details:
      "Cosmetic dentistry offers various treatments to improve the appearance of your smile. From veneers to bonding, our services can address imperfections and give you a more confident smile.",
    videoUrl: "https://www.youtube.com/watch?v=TPqrhW8Zhv0",
    imageUrl:
      "https://www.dhamadison.com/wp-content/uploads/2020/10/Cosmetic-Dentistry.jpg",
  },
  {
    id: 6,
    title: "Pedodontics",
    description: "Specialized dental care for children and adolescents.",
    details:
      "Pedodontics focuses on the dental care of children and adolescents, including preventive care, restorative treatments, and guidance for maintaining oral health from a young age.",
    videoUrl: "https://www.youtube.com/watch?v=cRWCHwt4_xQ",
    imageUrl:
      "https://misklinik.com.tr/wp-content/uploads/2023/09/pedodonti-gorseli-1024x683.jpg",
  },
  {
    id: 7,
    title: "Periodontal Care",
    description: "Maintain gum health with our periodontal treatments.",
    details:
      "Periodontal care involves treating gum disease and maintaining the health of the gums. Our treatments help prevent tooth loss and keep your gums in optimal condition.",
    videoUrl: "https://www.youtube.com/watch?v=s2y3MZoZFAE",
    imageUrl:
      "https://www.emmydental.net/wp-content/uploads/2020/08/periodontal-therapy.png",
  },
  {
    id: 8,
    title: "Restorative Dentistry",
    description: "Repair and restore damaged or missing teeth.",
    details:
      "Restorative dentistry focuses on repairing and restoring damaged or missing teeth. This includes procedures like fillings, crowns, bridges, and dentures to help restore your smile and functionality.",
    videoUrl: "https://www.youtube.com/watch?v=fm208EgQUoU",
    imageUrl:
      "https://www.dentomed.com.tr/wp-content/uploads/2021/09/lazer-tedavi-anasayfa.jpg",
  },
];

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
                {extractYouTubeVideoId(service.videoUrl) ? (
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
