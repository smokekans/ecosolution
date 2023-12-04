export const styles = {
  boxContacts: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  boxIcons: {
    display: "flex",
    gap: "8px",
  },
  titleContacts: {
    fontSize: { minMobile: 16 },
    lineHeight: { minMobile: "19.2px" },
    letterSpacing: { minMobile: "-0.64px" },
    mb: "8px",
  },
  subtitleContacts: {
    fontSize: { minMobile: 20 },
    lineHeight: { minMobile: "24px" },
    letterSpacing: { minMobile: "-0.8px" },
  },
  iconContacts: {
    width: "24px",
    height: "24px",
    stroke: (theme) => theme.palette.primary.dark,
    transition: "stroke 0.3s ease",
    "&:hover, &:focus, .boxIcons": {
      stroke: (theme) => theme.palette.primary.main,
    },
  },
  iconSNContacts: {
    width: "24px",
    height: "24px",
    p: { minMobile: "12px" },
    fill: (theme) => theme.palette.primary.dark,
    stroke: (theme) => theme.palette.primary.dark,
    transition: "fill 0.3s ease, stroke 0.3s ease",
    "&:hover, &:focus": {
      fill: (theme) => theme.palette.primary.main,
      stroke: (theme) => theme.palette.primary.main,
    },
  },
  dataLink: {
    display: "flex",
    alignItems: "center",
    gap: { tablet: "8px", minMobile: "4px" },
    color: (theme) => theme.palette.primary.dark,
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover, &:focus, .iconContacts": {
      color: (theme) => theme.palette.primary.main,
      stroke: (theme) => theme.palette.primary.main,
      fill: (theme) => theme.palette.primary.main,
    },
  },
  errMessage: {
    ".MuiFormHelperText-root": {
      mt: "8px",
      color: (theme) => theme.palette.error.main,
      fontSize: 12,
      lineHeight: "14.4px",
      fontWeight: "400",
      fontFamily: "Fira Sans",
      letterSpacing: "-0.48px",
      textAlign: "end",
    },
    ".css-29hl9n-MuiFormLabel-root-MuiInputLabel-root.Mui-error, .css-29hl9n-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
      {
        color: (theme) => theme.palette.primary.dark,
        fontSize: 16,
        fontFamily: "Fira Sans",
        lineHeight: "18px",
        letterSpacing: "-0.64px",
      },
    ".css-1flce26-MuiInputBase-input-MuiInput-input": {
      py: "8px",
    },
    ".css-hkk7p0-MuiInputBase-input-MuiInput-input": {
      height: "147px",
    },
    ".css-yyf6e8-MuiInputBase-root-MuiInput-root:after, .css-hcl2qf-MuiInputBase-root-MuiInput-root:after ":
      {
        borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
      },
    ".css-yyf6e8-MuiInputBase-root-MuiInput-root.Mui-error:after": {
      borderBottom: (theme) => `1px solid ${theme.palette.error.main}`,
    },
    ".css-hcl2qf-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before, .css-hcl2qf-MuiInputBase-root-MuiInput-root:before, .css-hcl2qf-MuiInputBase-root-MuiInput-root:before,  .css-yyf6e8-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before, .css-yyf6e8-MuiInputBase-root-MuiInput-root:before":
      {
        borderBottom: "none",
      },
  },
  placeholderForm: {
    "&::placeholder": {
      color: (theme) => theme.palette.text.form,
      fontSize: 18,
      fontFamily: "Fira Sans",
      lineHeight: "21.6px",
      letterSpacing: "-0.72px",
    },
  },
};
