export const appStyles = {
  container: (theme) => ({
    [theme.breakpoints.between(
      theme.breakpoints.values.minMobile,
      theme.breakpoints.values.maxMobile
    )]: {
      width: "100%",
    },
    [theme.breakpoints.up(theme.breakpoints.values.maxMobile)]: {
      width: (theme) => theme.breakpoints.values.maxMobile,
    },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      width: (theme) => theme.breakpoints.values.tablet,
    },
    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
      width: (theme) => theme.breakpoints.values.desktop,
    },
    mx: "auto",
    p: {
      desktop: "24px 20px 40px",
      tablet: "36px 30px 40px",
      minMobile: "36px 20px 24px",
    },
  }),
  main: { p: 0 },
};
