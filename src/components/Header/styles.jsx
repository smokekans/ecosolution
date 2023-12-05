export const styles = {
  appbar: {
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
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    p: 0,
  },
  boxNav: { display: "flex", gap: "12px" },
  btnMenu: {
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
  },
  btnContact: {
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
  },
  boxSN: { display: "flex" },
  boxUpToScroll: { position: "fixed", bottom: 10, right: 10, zIndex: 100 },
  iconFade: {
    width: "32px",
    height: "32px",
    fill: (theme) => theme.palette.primary.main,
    stroke: (theme) => theme.palette.primary.dark,
    "&:hover": {
      fill: (theme) => theme.palette.primary.dark,
      stroke: (theme) => theme.palette.primary.main,
    },
  },
  iconBtnContact: {
    fill: (theme) => theme.palette.primary.dark,
    "&:hover, &:focus": {
      fill: (theme) => theme.palette.primary.main,
    },
  },
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
