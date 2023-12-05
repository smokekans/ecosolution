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
import { styles } from "./styles";

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
    <AppBar position="fixed" sx={styles.appbar}>
      <Toolbar sx={styles.toolbar}>
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
        <Box sx={styles.boxNav}>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpen}
            sx={styles.btnMenu}
          >
            <MenuIcon />
          </IconButton>
          {matches && (
            <Button
              onClick={scrollToContact}
              endIcon={<ArrowBottomIcon sx={styles.iconBtnContact} />}
              sx={styles.btnContact}
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
          sx={styles.boxUpToScroll}
        >
          <Fab aria-label="scroll back to">
            <ArrowUpIcon sx={styles.iconFade} />
          </Fab>
        </Box>
      </Fade>
    </AppBar>
  );
}
