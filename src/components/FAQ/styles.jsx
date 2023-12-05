export const styles = {
  generalBox: {
    mt: { desktop: "120px", tablet: "100px", minMobile: "26px" },
    mb: { minMobile: "24px" },
    display: { tablet: "grid" },
    gridTemplateColumns: {
      tablet: "1fr 1fr",
    },
    columnGap: { desktop: "48px", tablet: "24px" },
  },
  h2: {
    fontSize: { desktop: 48, tablet: 36 },
    lineHeight: { desktop: "48px", tablet: "36px" },
    width: { desktop: "400px", minMobile: "320px" },
    mb: "24px",
    mx: { desktop: "auto" },
  },
  list: {
    p: 0,
    gridArea: "1 / 1 / 3",
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    p: 0,
    py: { desktop: "24px", minMobile: "16px" },
  },
  listItemBtn: {
    fontSize: { desktop: 24, minMobile: 18 },
    lineHeight: { desktop: "28.8px", minMobile: "21.6px" },
    letterSpacing: { desktop: "-0.96px", minMobile: "-0.72px" },
    justifyContent: "start",
    textTransform: "none",
    textAlign: "justify",
    color: (theme) => theme.palette.primary.dark,
    p: 0,
    style: { backgroundColor: "none" },
    "&:hover, &:focus": {
      backgroundColor: "none",
    },
    ".MuiButtonBase-root:hover": {
      backgroundColor: "none",
    },
    ":root": {
      "&:hover": {
        backgroundColor: "none",
      },
    },
  },
  questionIcon: {
    width: {
      tablet: "28px",
      minMobile: "16px",
    },
    height: {
      tablet: "28px",
      minMobile: "16px",
    },
  },
  listItemText: {
    pl: {
      minMobile: "24px",
    },
    pt: {
      desktop: "24px",
    },
  },
  textAnswer: {
    fontSize: { desktop: 16 },
    lineHeight: { desktop: "19.2px" },
    letterSpacing: { desktop: "-0.64px" },
  },
  boxSubtitle: {
    mt: { tablet: 0, minMobile: "36px" },
    mb: { tablet: "inherit" },
    textAlign: "center",
    gridArea: "2/2",
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subtitle: {
    fontSize: { desktop: 24, minMobile: 18 },
    lineHeight: { desktop: "28.8px", minMobile: "21.6px" },
    letterSpacing: { desktop: "-0.96px", minMobile: "-0.72px" },
  },
  btn: {
    borderRadius: (theme) => theme.shape.borderRadius,
    bgcolor: (theme) => theme.palette.primary.main,
    width: "160px",
    height: "39px",
    textTransform: "none",
    mt: "12px",
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
  iconBtn: {
    fill: (theme) => theme.palette.primary.dark,
    "&:hover, &:focus": {
      fill: (theme) => theme.palette.primary.main,
    },
  },
};
