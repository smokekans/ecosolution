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
    <Box
      id="main"
      sx={{ mt: { desktop: "200px", tablet: "164px", minMobile: "146px" } }}
    >
      <Toolbar id="back-to-top" />
      <Box
        sx={{
          display: { tablet: "grid" },
          gridTemplateColumns: {
            desktop: "2fr 1fr",
            tablet: "1fr 1fr",
          },
          columnGap: { desktop: "48px", tablet: "24px" },
          alignItems: { desktop: "flex-end", tablet: "center" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            width: {
              desktop: "485px",
              tablet: "300px",
              maxMobile: "440px",
              minMobile: "100%",
            },
            fontSize: { desktop: 64, tablet: 48 },
            lineHeight: { desktop: "64px", tablet: "48px" },
          }}
        >
          Renewable energy for any task
        </Typography>
        <Box
          sx={{
            width: { tablet: "363px" },
            mt: { tablet: 0, minMobile: "24px" },
            mx: { tablet: 0, minMobile: "auto" },
            display: { tablet: "block", minMobile: "flex" },
            alignItems: { minMobile: "center" },
            flexDirection: { minMobile: "column" },
            textAlign: { tablet: "start", minMobile: "justify" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              width: {
                desktop: "363px",
                tablet: "342px",
                maxMobile: "440px",
                minMobile: "100%",
              },
              mb: { tablet: "20px", minMobile: "24px" },
            }}
          >
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Typography>
          <Button
            onClick={scrollToCases}
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius,
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              width: { desktop: "141px" },
              height: { desktop: "39px" },
              p: { desktop: "4px" },
              pl: { desktop: "16px" },
              m: { tablet: 0 },
              textTransform: "none",
              color: (theme) => theme.palette.text.primary,
              "&:hover, &:focus": {
                bgcolor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.text.secondary,
              },
            }}
            endIcon={
              <ArrowRightIcon
                sx={{
                  width: "32px",
                  height: "32px",
                }}
              />
            }
          >
            Learn more
          </Button>
        </Box>
      </Box>
      <Divider
        sx={{
          my: { minMobile: "24px" },
          mt: { desktop: "24px", tablet: "26px" },
          mb: { desktop: "12px", tablet: "16px" },
        }}
      />
      <Box
        sx={{
          display: { tablet: "grid", minMobile: "block" },
          gridTemplateColumns: {
            desktop: "2fr 1fr",
            tablet: "1fr 1fr",
          },
          columnGap: { desktop: "48px", tablet: "24px" },
          textAlign: { tablet: "start", minMobile: "center" },
        }}
      >
        <Link
          variant="body2"
          href="https://maps.app.goo.gl/Z9Sbt8fHM3tDfG3a6"
          target="_blank"
          sx={{
            textDecoration: "none",
            color: (theme) => theme.palette.primary.dark,
          }}
        >
          79005, Ukraine, Lviv, street. Shota Rustaveli, 7
        </Link>
        <Box
          sx={{
            display: { tablet: "flex", minMobile: "block" },
            justifyContent: { tablet: "space-between" },
            mt: { tablet: 0, minMobile: "8px" },
          }}
        >
          <Link
            variant="body2"
            href="mailto:office@ecosolution.com"
            sx={{
              textDecoration: "none",
              color: (theme) => theme.palette.primary.dark,
            }}
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
        sx={{
          width: {
            desktop: "1240px",
            tablet: "708px",
            maxMobile: "440px",
            minMobile: "100%",
          },
          height: { desktop: "524px", tablet: "348px", minMobile: "200px" },
          mt: "36px",
        }}
      />
    </Box>
  );
}
