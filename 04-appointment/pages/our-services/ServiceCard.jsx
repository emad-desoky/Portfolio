import { Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./SpecialOffer.module.css";

const ServiceCard = ({ title, description, onClick, imageUrl }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={styles.card}
  >
    <Card
      variant="outlined"
      sx={{ borderRadius: 2, boxShadow: 3, overflow: "hidden" }}
    >
      <CardContent>
        <Typography variant="h5" component="h3" className={styles.title}>
          {title}
        </Typography>
        <img src={imageUrl} alt={title} className={styles.image} />
        <Typography
          variant="body1"
          sx={{ my: 2 }}
          className={styles.description}
        >
          {description}
        </Typography>
        <div className={styles.cardButton}>
          <Button variant="contained" color="primary" onClick={onClick}>
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default ServiceCard;
