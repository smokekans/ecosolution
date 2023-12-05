import {
  Box,
  Button,
  Divider,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import heroIMG from "../../image/photo/hero-desktop.jpg";
import { ArrowRightIcon } from "../../image/svg/ArrowRightIcon";
import { styles } from "./styles";

export default function Main() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("tablet"));

  const scrollToCases = () => {
    const casesAnchor = document.getElementById("cases");
    if (casesAnchor) {
      const offset = 112;
      const targetPosition = casesAnchor.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box id="main" sx={styles.generalBox}>
      <Toolbar id="back-to-top" />
      <Box sx={styles.boxContent}>
        <Typography variant="h1" sx={styles.h1}>
          Renewable energy for any task
        </Typography>
        <Box sx={styles.boxSubtitle}>
          <Typography variant="body2" sx={styles.subtitle}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Typography>
          <Button
            onClick={scrollToCases}
            sx={styles.btn}
            endIcon={<ArrowRightIcon sx={styles.iconBtniconBtn} />}
          >
            Learn more
          </Button>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
      <Box sx={styles.boxDetails}>
        <Link
          variant="body2"
          href="https://maps.app.goo.gl/Z9Sbt8fHM3tDfG3a6"
          target="_blank"
          sx={styles.address}
        >
          79005, Ukraine, Lviv, street. Shota Rustaveli, 7
        </Link>
        <Box sx={styles.boxDet}>
          <Link
            variant="body2"
            href="mailto:office@ecosolution.com"
            sx={styles.address}
          >
            office@ecosolution.com
          </Link>
          {matches && (
            <Typography variant="body2">ecosolution © 2023</Typography>
          )}
        </Box>
      </Box>
      <Box
        component="img"
        alt="wind turbine clean energy"
        src={heroIMG}
        sx={styles.img}
      />
    </Box>
  );
}
