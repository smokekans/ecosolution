export const styles = {
  generalBox: {
    mt: { desktop: "120px", tablet: "100px", minMobile: "36px" },
  },
  generalBoxCard: {
    bgcolor: (theme) => theme.palette.common.gray,
    width: {
      desktop: "274px",
      tablet: "159px",
      maxMobile: "184px",
      minMobile: "100%",
    },
    maxWidth: { maxMobile: "100%", minMobile: "184px" },
    height: {
      desktop: "339px",
      maxMobile: "197px",
      minMobile: "217px",
    },
  },
  boxValues: {
    mt: { minMobile: "36px" },
    display: "grid",
    gridTemplateColumns: { tablet: "1fr 1fr" },
    columnGap: { tablet: "24px" },
    rowGap: { minMobile: "24px" },
    gridAutoFlow: "row",
    justifyItems: { tablet: "center" },
  },
  boxPad: {
    p: { desktop: "48px 24px", minMobile: "12px" },
  },
  boxTitle: {
    display: { tablet: "grid" },
    alignItems: { tablet: "center" },
    gridAutoFlow: { tablet: "column" },
    gridTemplateColumns: {
      desktop: "1fr 1fr 1fr",
      tablet: "1fr auto 1fr",
    },
  },
  boxTitleCard: {
    display: "flex",
    alignItems: "center",
    gap: { maxMobile: "8px", minMobile: "4px" },
  },
  boxWithCard: {
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: { minMobile: "auto auto" },
    columnGap: { desktop: "48px", minMobile: "24px" },
  },
  title: {
    mb: { minMobile: "24px" },
    gridTemplateColumns: { tablet: "1 / 3" },
    width: { desktop: "365px", tablet: "272px" },
    fontSize: { desktop: 48 },
    lineHeight: { desktop: "48px" },
  },
  titleCard: {
    fontSize: { desktop: 32 },
    lineHeight: { desktop: "48px" },
  },
  subtitle: {
    textAlign: "justify",
    gridTemplateColumns: { tablet: "3 / 3" },
    ml: { tablet: "11px" },
    fontSize: { desktop: 16 },
    lineHeight: { desktop: "19.2px" },
    letterSpacing: { desktop: "-0.64px" },
  },
  description: {
    fontSize: { desktop: "16px" },
    lineHeight: { desktop: "19.2px" },
    letterSpacing: { desktop: "-0.64px" },
    textAlign: "justify",
  },
  iconValue: {
    width: { desktop: "24px", minMobile: "16px" },
    height: { desktop: "24px", minMobile: "16px" },
  },
  dividerValues: {
    height: { desktop: "87px", tablet: "110px" },
    gridTemplateColumns: { desktop: "none", tablet: "2 / 3" },
    borderWidth: "0.5px",
    m: { desktop: "auto" },
  },
  dividerCard: { mt: { minMobile: "33px" }, mb: { minMobile: "12px" } },
  firstImg: {
    width: {
      gridColumn: { tablet: "span 2" },
      desktop: "596px",
      tablet: "342px",
    },
    height: { desktop: "339px", tablet: "197px" },
    gridArea: "2 / 1 / 3 / 2",
  },
  secondImg: {
    width: {
      desktop: "596px",
      tablet: "342px",
    },
    height: { desktop: "339px", tablet: "197px" },
  },
};
