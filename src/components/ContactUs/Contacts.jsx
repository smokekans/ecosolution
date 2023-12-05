import { Box, Link, Typography } from "@mui/material";
import { PhoneIcon } from "../../image/svg/PhoneIcon";
import { EmailIcon } from "../../image/svg/Emailcon";
import { AddressIcon } from "../../image/svg/AddressIcon";
import { FacebookIcon } from "../../image/svg/FacebookIcon";
import { InstIcon } from "../../image/svg/InstIcon";
import { styles } from "./styles";

export default function Contacts() {
  return (
    <Box sx={styles.generalBoxContacts}>
      <Box>
        <Typography variant="subtitle2" sx={styles.titleContacts}>
          Phone:
        </Typography>
        <Box sx={styles.boxContacts}>
          <Link href="tel:+380981234567" sx={styles.dataLink}>
            <PhoneIcon sx={styles.iconContacts} />
            <Typography variant="subtitle2" sx={styles.subtitleContacts}>
              38 (098) 12 34 567
            </Typography>
          </Link>
          <Link href="tel:+380981234567" sx={styles.dataLink}>
            <PhoneIcon sx={styles.iconContacts} />
            <Typography variant="subtitle2" sx={styles.subtitleContacts}>
              38 (098) 12 34 567
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={styles.titleContacts}>
          Email:
        </Typography>
        <Link href="mailto:office@ecosolution.com" sx={styles.dataLink}>
          <EmailIcon sx={styles.iconContacts} />
          <Typography variant="subtitle2" sx={styles.subtitleContacts}>
            office@ecosolution.com
          </Typography>
        </Link>
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={styles.titleContacts}>
          Address:
        </Typography>
        <Link
          href="https://maps.app.goo.gl/Z9Sbt8fHM3tDfG3a6"
          target="_blank"
          sx={styles.dataLink}
        >
          <AddressIcon sx={styles.iconContacts} />
          <Typography variant="subtitle2" sx={styles.subtitleContacts}>
            79005, Ukraine, Lviv, street. Shota Rustaveli, 7
          </Typography>
        </Link>
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={styles.titleContacts}>
          Social network:
        </Typography>
        <Box sx={styles.boxIcons}>
          <Link href="https://facebook.com">
            <FacebookIcon sx={styles.iconSNContacts} />
          </Link>
          <Link href="https://instagram.com">
            <InstIcon sx={styles.iconSNContacts} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
