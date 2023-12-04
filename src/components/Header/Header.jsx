import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Fab,
  Fade,
  IconButton,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { MenuIcon } from "../../image/svg/MenuIcon";
import { LogoEcosolution } from "../../image/logo-company/LogoEcosolution";
import { ArrowBottomIcon } from "../../image/svg/ArrowBottomIcon";
import ModalMenu from "./ModalMenu";
import { ArrowUpIcon } from "../../image/svg/ArrowUpIcon";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const [open, setOpen] = React.useState(false);
  const [logoColor, setLogoColor] = React.useState(
    () => theme.palette.primary.dark
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newLogoColor =
        scrollY > 0
          ? () => theme.palette.primary.main
          : () => theme.palette.primary.dark;

      setLogoColor(newLogoColor);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });

  const handleScrollUp = () => {
    const anchor = document.querySelector("#back-to-top");
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactAnchor = document.getElementById("contact");
    if (contactAnchor) {
      const offset = 112;
      const targetPosition = contactAnchor.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: (theme) => theme.palette.background.default,
        boxShadow: "none",
        width: {
          desktop: "1240px",
          tablet: "708px",
          maxMobile: "440px",
          minMobile: "100%",
        },
        top: "0",
        left: "auto",
        right: "auto",
        height: "112px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 0,
        }}
      >
        <LogoEcosolution
          onClick={handleScrollUp}
          sx={{
            fill: logoColor,
            transition: "fill 0.3s ease",
            width: "269px",
            height: "40px",
            cursor: "pointer",
            "&:hover": {
              fill: (theme) => theme.palette.primary.main,
            },
          }}
        />
        <Box sx={{ display: "flex", gap: "12px" }}>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpen}
            sx={{
              bgcolor: (theme) => theme.palette.primary.light,
              width: "39px",
              height: "39px",
              "&:hover, &:focus": {
                bgcolor: (theme) => theme.palette.primary.main,
              },
              ".MuiSvgIcon-root": {
                width: "16px",
                height: "16px",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          {matches && (
            <Button
              onClick={scrollToContact}
              endIcon={
                <ArrowBottomIcon
                  sx={{
                    fill: (theme) => theme.palette.primary.dark,
                    "&:hover, &:focus": {
                      fill: (theme) => theme.palette.primary.main,
                    },
                  }}
                />
              }
              sx={{
                borderRadius: (theme) => theme.shape.borderRadius,
                bgcolor: (theme) => theme.palette.primary.main,
                width: "160px",
                height: "39px",
                textTransform: "none",
                color: (theme) => theme.palette.text.primary,
                fill: (theme) => theme.palette.primary.dark,
                "&:hover, &:focus": {
                  bgcolor: (theme) => theme.palette.primary.dark,
                  color: (theme) => theme.palette.text.secondary,
                  fill: (theme) => theme.palette.primary.main,
                  ".MuiSvgIcon-root": {
                    fill: (theme) => theme.palette.primary.main,
                  },
                },
                ".MuiSvgIcon-root": {
                  width: "16px",
                  height: "16px",
                },
              }}
            >
              Get in touch
            </Button>
          )}
        </Box>
        <ModalMenu open={open} handleClose={handleClose} />
      </Toolbar>
      <Fade in={trigger}>
        <Box
          onClick={handleScrollUp}
          role="presentation"
          sx={{ position: "fixed", bottom: 10, right: 10, zIndex: 100 }}
        >
          <Fab aria-label="scroll back to">
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
          </Fab>
        </Box>
      </Fade>
    </AppBar>
  );
}
