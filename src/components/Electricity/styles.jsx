export const styles = {
  generalBox: {
    mt: { desktop: "120px", tablet: "100px", minMobile: "36px" },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  boxCount: {
    display: "flex",
    alignItems: "center",
    gap: { tablet: "24px", minMobile: "8px" },
  },
  h2Electricity: {
    fontSize: { desktop: 48, tablet: 36 },
    lineHeight: { desktop: "48px", tablet: "36px" },
    width: { desktop: "491px", tablet: "368px", minMobile: "286px" },
    textAlign: "center",
  },
  h2ElectricityCount: {
    fontSize: { desktop: 164, tablet: 100, minMobile: 48 },
    fontWeight: "800",
    lineHeight: {
      desktop: "164px",
      tablet: "100px",
      minMobile: "48px",
    },
    color: (theme) => theme.palette.primary.main,
    width: { desktop: "890px" },
  },
  h2KWh: {
    fontSize: { desktop: 36, tablet: 28, minMobile: 24 },
    lineHeight: { desktop: "36px", tablet: "48px", minMobile: "24px" },
    textTransform: "none",
  },
  divider: {
    height: { tablet: "87px", minMobile: "48px" },
    width: "0.5px",
    my: "16px",
  },
};
