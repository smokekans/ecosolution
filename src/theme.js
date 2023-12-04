import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      minMobile: 320,
      maxMobile: 480,
      tablet: 768,
      desktop: 1280,
    },
  },
  palette: {
    mode: "light",
    common: {
      black: "#173D33",
      white: "#fff",
      gray: "#EAEDF1",
      menu: "rgba(255, 255, 255, 0.25)",
      menuactive: "rgba(151, 210, 139, 0.25)",
    },
    primary: {
      main: "#97D28B",
      dark: "#173D33",
      light: "#DCEFD8",
      contrastText: "#173D33",
    },
    error: {
      main: "#D28B8B",
      contrastText: "#D28B8B",
    },
    text: {
      primary: "#173D33",
      secondary: "#97D28B",
      form: "#BDBDBD",
      disabled: "rgba(23, 61, 51, 0.25)",
    },
    divider: "#97D28B",
    background: { paper: "#F3F5FA", default: "#F3F5FA" },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Onest",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontSize: 36,
      fontFamily: "Oswald",
      fontWeight: "400",
      textTransform: "uppercase",
      lineHeight: "36px",
    },
    h2: {
      fontSize: 28,
      fontFamily: "Oswald",
      fontWeight: "400",
      textTransform: "uppercase",
      lineHeight: "28px",
    },
    h3: {
      fontSize: 14,
      fontFamily: "Oswald",
      fontWeight: "400",
      textTransform: "uppercase",
      lineHeight: "24px",
    },
    h4: {
      fontSize: 16,
      fontFamily: "Oswald",
      fontWeight: "400",
      textTransform: "uppercase",
      lineHeight: "24px",
    },
    subtitle1: {
      fontSize: 28,
      fontFamily: "Fira Sans",
      fontWeight: "300",
      letterSpacing: "-1.12px",
      lineHeight: "33.6px",
    },
    subtitle2: {
      fontSize: 18,
      fontFamily: "Fira Sans",
      fontWeight: "400",
      letterSpacing: "-0.04px",
      lineHeight: "22px",
    },
    body1: {
      fontSize: 16,
      fontFamily: "Fira Sans",
      fontWeight: "400",
      lineHeight: "14.4px",
      letterSpacing: "-0.56px",
    },
    body2: {
      fontSize: 14,
      fontFamily: "Fira Sans",
      fontWeight: "400",
      lineHeight: "16.8px",
      letterSpacing: "-0.56px",
    },
    button: {
      fontSize: 16,
      fontFamily: "Fira Sans",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "-0.64px",
    },
  },
});

export default theme;
