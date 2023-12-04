export const styles = {
  genBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    bgcolor: "rgba(23, 61, 51, 0.75)",
    width: { desktop: "365px", minMobile: "320px" },
    height: "90vh",
    backdropFilter: "blur(12.5px)",
    borderRadius: "25px",
    p: "24px",
    ml: "auto",
  },
  divider: {
    width: 1,
    mb: "18px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: (theme) => theme.palette.common.menu,
    px: 0,
    gap: "8px",
    stroke: (theme) => theme.palette.common.menu,
    "&:hover": {
      stroke: (theme) => theme.palette.primary.main,
      color: (theme) => theme.palette.common.white,
    },
  },
  text: {
    fontSize: 24,
    fontFamily: "Fira Sans",
    lineHeight: "28.8px",
    letterSpacing: "-0.96px",
    height: "29px",
  },
  itemClose: {
    textDecoration: "none",
    color: (theme) => theme.palette.common.white,
    p: 0,
    stroke: (theme) => theme.palette.common.menu,
    "&:hover": {
      stroke: (theme) => theme.palette.primary.main,
      color: (theme) => theme.palette.primary.main,
    },
  },
  textClose: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    fontFamily: "Fira Sans",
    lineHeight: "19.2px",
    letterSpacing: "-0.64px",
    height: "29px",
    color: (theme) => theme.palette.common.white,
    "&:hover": {
      color: (theme) => theme.palette.primary.main,
    },
  },
  iconMenu: {
    width: "16px",
    height: "16px",
    stroke: (theme) => theme.palette.common.menu,
    "&:hover": {
      stroke: (theme) => theme.palette.primary.main,
    },
  },
  iconCloseMenu: {
    width: "16px",
    height: "16px",
    stroke: (theme) => theme.palette.common.white,
    "&:hover": {
      stroke: (theme) => theme.palette.primary.main,
    },
  },
  iconSNMenu: {
    width: "24px",
    height: "24px",
    stroke: (theme) => theme.palette.common.white,
    "&:hover": {
      stroke: (theme) => theme.palette.primary.main,
    },
  },
};
