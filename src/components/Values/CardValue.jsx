import { Box, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { styles } from "./styles";

export default function CardValue({ value }) {
  return (
    <Box sx={styles.generalBoxCard}>
      <Box sx={styles.boxPad}>
        <Box sx={styles.boxTitleCard}>
          {value.icon}
          <Typography variant="h3" sx={styles.titleCard}>
            {value.title}
          </Typography>
        </Box>
        <Divider sx={styles.dividerCard} />
        <Typography variant="body2" sx={styles.description}>
          {value.description}
        </Typography>
      </Box>
    </Box>
  );
}
CardValue.propTypes = {
  value: PropTypes.object.isRequired,
};
