import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import value1IMG from "../../image/photo/value1.jpg";
import value2IMG from "../../image/photo/value2.jpg";
import CardValue from "./CardValue";
import { styles } from "./styles";
import { value } from "./value";

export default function Values() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("tablet"));

  return (
    <Box id="about" sx={styles.generalBox}>
      <Box sx={styles.boxTitle}>
        <Typography variant="h2" sx={styles.title}>
          Main values of our company
        </Typography>
        {matches && <Divider sx={styles.dividerValues} />}
        <Typography variant="body2" sx={styles.subtitle}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the worlds energy needs.
        </Typography>
      </Box>

      <Box sx={styles.boxValues}>
        <Box sx={styles.boxWithCard}>
          <CardValue value={value[0]} />
          <CardValue value={value[1]} />
        </Box>
        {matches && (
          <Box
            component="img"
            alt="man worker firld by solar panels"
            src={value1IMG}
            sx={styles.firstImg}
          />
        )}
        {matches && (
          <Box
            component="img"
            alt="wind farms fields"
            src={value2IMG}
            sx={styles.secondImg}
          />
        )}
        <Box sx={styles.boxWithCard}>
          <CardValue value={value[2]} />
          <CardValue value={value[3]} />
        </Box>
      </Box>
    </Box>
  );
}
