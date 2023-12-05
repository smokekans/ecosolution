export const styles = {
  generalBox: { mt: { desktop: "200px", tablet: "164px", minMobile: "146px" } },
  boxContent: {
    display: { tablet: "grid" },
    gridTemplateColumns: {
      desktop: "2fr 1fr",
      tablet: "1fr 1fr",
    },
    columnGap: { desktop: "48px", tablet: "24px" },
    alignItems: { desktop: "flex-end", tablet: "center" },
  },
  boxSubtitle: {
    width: { tablet: "363px" },
    mt: { tablet: 0, minMobile: "24px" },
    mx: { tablet: 0, minMobile: "auto" },
    display: { tablet: "block", minMobile: "flex" },
    alignItems: { minMobile: "center" },
    flexDirection: { minMobile: "column" },
    textAlign: { tablet: "start", minMobile: "justify" },
  },
  boxDetails: {
    display: { tablet: "grid", minMobile: "block" },
    gridTemplateColumns: {
      desktop: "2fr 1fr",
      tablet: "1fr 1fr",
    },
    columnGap: { desktop: "48px", tablet: "24px" },
    textAlign: { tablet: "start", minMobile: "center" },
  },
  boxDet: {
    display: { tablet: "flex", minMobile: "block" },
    justifyContent: { tablet: "space-between" },
    mt: { tablet: 0, minMobile: "8px" },
  },
  subtitle: {
    width: {
      desktop: "363px",
      tablet: "342px",
      maxMobile: "440px",
      minMobile: "100%",
    },
    mb: { tablet: "20px", minMobile: "24px" },
  },
  address: {
    textDecoration: "none",
    color: (theme) => theme.palette.primary.dark,
  },
  img: {
    width: {
      desktop: "1240px",
      tablet: "708px",
      maxMobile: "440px",
      minMobile: "100%",
    },
    height: { desktop: "524px", tablet: "348px", minMobile: "200px" },
    mt: "36px",
  },
  btn: {
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
  },
  iconBtn: {
    width: "32px",
    height: "32px",
  },
  divider: {
    my: { minMobile: "24px" },
    mt: { desktop: "24px", tablet: "26px" },
    mb: { desktop: "12px", tablet: "16px" },
  },
  h1: {
    width: {
      desktop: "485px",
      tablet: "300px",
      maxMobile: "440px",
      minMobile: "100%",
    },
    fontSize: { desktop: 64, tablet: 48 },
    lineHeight: { desktop: "64px", tablet: "48px" },
  },
};
