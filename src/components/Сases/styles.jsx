export const styles = {
  generalBox: { mt: { desktop: "120px", tablet: "100px", minMobile: "36px" } },
  headBox: {
    display: { desktop: "grid", tablet: "flex", minMobile: "block" },
    gridTemplateColumns: {
      desktop: "1fr auto 1fr",
    },
    gridGap: { desktop: "24px" },
    alignItems: "center",
    justifyContent: "space-between",
  },
  changeStepsBox: {
    display: { desktop: "grid", minMobile: "flex" },
    gridTemplateColumns: { desktop: "1fr auto auto" },
    gridColumn: { dektop: "3 / 4" },
    mt: { tablet: 0, minMobile: "24px" },
  },
  stepsBox: {
    gridColumn: { desktop: "1 / 2" },
    display: "flex",
    alignItems: "flex-end",
    mx: { desktop: "auto" },
    ml: { minMobile: 0 },
    mr: { tablet: "124px" },
    width: { desktop: "74px" },
  },
  casesBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoFlow: "column",
    columnGap: { desktop: "48px", tablet: "24px" },
    overflow: "hidden",
  },
  cardCaseBox: {
    width: {
      desktop: "596px",
      tablet: "342px",
      maxMobile: "440px",
      minMobile: "100%",
    },
    height: { desktop: "506px", tablet: "322px", minMobile: "338px" },
    bgcolor: (theme) => theme.palette.common.gray,
  },
  infoCardCaseBox: { p: { desktop: "36px 48px", minMobile: "24px 12px 12px" } },
  infoWithBtnCardCaseBox: { display: "flex", justifyContent: "space-between" },
  nameInfoCardCaseBox: {
    width: {
      desktop: "357px",
      maxMobile: "230px",
      minMobile: "200px",
    },
    height: { maxMobile: "66px", minMobile: "88px" },
  },
  cardCaseImage: {
    width: {
      desktop: "596px",
      tablet: "342px",
      maxMobile: "440px",
      minMobile: "100%",
    },
    height: { desktop: "296px", minMobile: "168px" },
  },
  descriptioInfoCardCaseBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  swipeableBox: {
    mt: { desktop: "120px", minMobile: "26px" },
  },
  stepper: {
    justifyContent: { minMobile: "flex-start" },
    gridColumn: { desktop: "2 / 4" },
    ml: "auto",
    p: 0,
    gap: "12px",
    bgcolor: "transparent",
    ".MuiMobileStepper-dots": { display: "none" },
    ".MuiButton-root": { p: 0 },
  },
  h2: {
    maxWidth: { desktop: "398px", minMobile: "264px" },
    gridColumn: { desktop: "1 / 2" },
    fontSize: { desktop: "48px", tablet: "36px" },
    lineHeight: { desktop: "48px", tablet: "36px" },
  },
  subtitle1: {
    color: (theme) => theme.palette.text.disabled,
  },
  subtitle2: {
    fontSize: { desktop: "24px", tablet: "20px" },
    lineHeight: { desktop: "28.8px", tablet: "24px" },
    letterSpacing: { desktop: "-0.96px", tablet: "-0.08em" },
  },
  body1: {
    fontSize: { desktop: 16, tablet: 14 },
    lineHeight: { desktop: "19.2px", tablet: "16.8px" },
    letterSpacing: { desktop: "-0.64px", tablet: "-0.56px" },
  },
  iconBtnChangeStep: {
    width: { desktop: "84px", minMobile: "66px" },
    height: { desktop: "84px", minMobile: "66px" },

    stroke: (theme) => theme.palette.primary.dark,
    "&:hover, &:focus": {
      stroke: (theme) => theme.palette.primary.main,
    },
  },
  iconBtnDetails: {
    width: "60px",
    height: "60px",
    "&:hover, &:focus": {
      width: "60px",
      height: "60px",
    },
  },
  iconDetails: {
    width: "60px",
    height: "60px",
    fill: (theme) => theme.palette.primary.main,
    stroke: (theme) => theme.palette.primary.dark,
    "&:hover, &:focus": {
      fill: (theme) => theme.palette.primary.dark,
      stroke: (theme) => theme.palette.primary.main,
    },
  },
  dividerCardCase: {
    mt: { desktop: "34px", minMobile: "16px" },
    mb: { desktop: "24px", minMobile: "12px" },
  },
  dividerHead: {
    gridColumn: { desktop: "2 / 3" },
    borderWidth: "0.5px",
    height: { desktop: "96px", tablet: "65px" },
    m: { desktop: 0 },
    ml: { tablet: "90px" },
    mr: { tablet: "18px" },
  },
};
