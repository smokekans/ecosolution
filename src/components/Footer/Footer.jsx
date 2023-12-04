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
import { styles } from "./styles";
import { ArrowUpIcon } from "../../image/svg/ArrowUpIcon";

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
      <Box
        sx={{
          mt: "40px",
          display: "grid",
          gridAutoFlow: "column",
          alignItems: "start",
          gridTemplateColumns: {
            tablet: "1fr 1fr",
          },
          columnGap: { desktop: "48px", tablet: "24px" },
          mb: "16px",
        }}
      >
        <LogoEcosolution
          onClick={handleScrollUp}
          sx={{
            width: "269px",
            height: "40px",
            cursor: "pointer",
            fill: (theme) => theme.palette.primary.dark,
            "&:hover": { fill: (theme) => theme.palette.primary.main },
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
          <IconButton
            onClick={handleScrollUp}
            sx={{
              ml: "auto",
              width: "32px",
              height: "32px",
            }}
          >
            <ArrowUpIcon
              sx={{
                width: "32px",
                height: "32px",
                fill: (theme) => theme.palette.primary.main,
                stroke: (theme) => theme.palette.primary.dark,
                "&:hover": {
                  fill: (theme) => theme.palette.primary.dark,
                  stroke: (theme) => theme.palette.primary.main,
                },
              }}
            />
          </IconButton>
        </Box>
      </Box>
      {matchesDown && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "24px",
          }}
        >
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
      <Box
        sx={{
          display: {
            tablet: "grid",
            minMobile: "flex",
          },
          textAlign: { tablet: "start", minMobile: "center" },
          gridAutoFlow: "column",
          gridTemplateColumns: {
            desktop: "1fr 1fr",
          },
          columnGap: "48px",
          flexDirection: { tablet: "row", minMobile: "column" },
          alignItems: { tablet: "start", minMobile: "center" },
        }}
      >
        <Link
          href="https://maps.app.goo.gl/Z9Sbt8fHM3tDfG3a6"
          target="_blank"
          sx={{
            fontSize: 16,
            fontFamily: "Fira Sans",
            fontWeight: "400",
            lineHeight: "19.2px",
            letterSpacing: "-0.64px",
            mb: { tablet: 0, minMobile: "12px" },
            color: (theme) => theme.palette.primary.dark,
            textDecoration: "none",
            transition: "color 0.3s ease",
            "&:hover, &:focus": {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { tablet: "row", minMobile: "column" },
            gap: "12px",
          }}
        >
          <Link
            href="mailto:office@ecosolution.com"
            sx={{
              fontSize: 16,
              fontFamily: "Fira Sans",
              fontWeight: "400",
              lineHeight: "19.2px",
              letterSpacing: "-0.64px",

              color: (theme) => theme.palette.primary.dark,
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover, &:focus": {
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            office@ecosolution.com
          </Link>
          <Typography
            variant="body2"
            sx={{
              fontSize: 16,
              fontFamily: "Fira Sans",
              fontWeight: "400",
              lineHeight: "19.2px",
              letterSpacing: "-0.64px",
              ml: { tablet: "auto", minMobile: 0 },
            }}
          >
            ecosolution © 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
