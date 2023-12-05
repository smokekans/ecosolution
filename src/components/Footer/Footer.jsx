import {
  Box,
  Divider,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LogoEcosolution } from "../../image/logo-company/LogoEcosolution";
import { FacebookIcon } from "../../image/svg/FacebookIcon";
import { InstIcon } from "../../image/svg/InstIcon";
import { ArrowUpIcon } from "../../image/svg/ArrowUpIcon";
import { styles } from "./styles";

export default function Footer() {
  const matchesUp = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const matchesDown = useMediaQuery((theme) =>
    theme.breakpoints.down("tablet")
  );
  const handleScrollUp = () => {
    const anchor = document.querySelector("#back-to-top");
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };
  return (
    <Box component="footer">
      <Divider />
      <Box sx={styles.boxTop}>
        <LogoEcosolution onClick={handleScrollUp} sx={styles.logo} />
        <Box sx={styles.boxBtn}>
          {matchesUp && (
            <Box sx={styles.boxIcons}>
              <Link href="https://facebook.com">
                <FacebookIcon sx={styles.iconSocialNetwork} />
              </Link>
              <Link href="https://instagram.com">
                <InstIcon sx={styles.iconSocialNetwork} />
              </Link>
            </Box>
          )}
          <IconButton onClick={handleScrollUp} sx={styles.btnUp}>
            <ArrowUpIcon sx={styles.iconBtnUp} />
          </IconButton>
        </Box>
      </Box>
      {matchesDown && (
        <Box sx={styles.boxBtnSN}>
          <Box sx={styles.boxIcons}>
            <Link href="https://facebook.com">
              <FacebookIcon sx={styles.iconSocialNetwork} />
            </Link>
            <Link href="https://instagram.com">
              <InstIcon sx={styles.iconSocialNetwork} />
            </Link>
          </Box>
        </Box>
      )}
      <Box sx={styles.boxDown}>
        <Link
          href="https://maps.app.goo.gl/Z9Sbt8fHM3tDfG3a6"
          target="_blank"
          sx={styles.address}
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
        <Box sx={styles.box2fr}>
          <Link href="mailto:office@ecosolution.com" sx={styles.email}>
            office@ecosolution.com
          </Link>
          <Typography variant="body2" sx={styles.markWeb}>
            ecosolution © 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
