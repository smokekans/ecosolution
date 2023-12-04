import { Box, Typography } from "@mui/material";
import Contacts from "./Contacts";
import FormContact from "./Form/Form";

export default function ContactUs() {
  return (
    <Box id="contact" sx={{ my: { minMobile: "36px" } }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { desktop: 36, tablet: 28 },
          lineHeight: { desktop: "36px", tablet: "28px" },
          textAlign: "center",
        }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{
          display: { tablet: "grid" },
          mt: { minMobile: "36px" },
          gridTemplateColumns: {
            tablet: "1fr 1fr",
          },
          columnGap: { desktop: "48px", tablet: "24px" },
        }}
      >
        <Contacts />
        <FormContact />
      </Box>
    </Box>
  );
}
