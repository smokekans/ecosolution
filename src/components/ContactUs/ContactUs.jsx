import { Box, Typography } from "@mui/material";
import Contacts from "./Contacts";
import FormContact from "./Form/Form";
import { styles } from "./styles";

export default function ContactUs() {
  return (
    <Box id="contact" sx={styles.generalBoxContactUs}>
      <Typography variant="h2" sx={styles.h2ContactUs}>
        Contact Us
      </Typography>
      <Box sx={styles.containerCU}>
        <Contacts />
        <FormContact />
      </Box>
    </Box>
  );
}
