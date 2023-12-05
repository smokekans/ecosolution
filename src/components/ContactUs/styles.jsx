export const styles = {
  generalBoxForm: {
    bgcolor: (theme) => theme.palette.common.gray,
    gridTemplateColumns: { tablet: "2 / 2" },
    p: { tablet: "36px 24px", minMobile: "36px 12px" },
    mt: { tablet: 0, minMobile: "24px" },
  },
  generalBoxContacts: {
    gridTemplateColumns: "1 / 2",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  generalBoxContactUs: { my: { minMobile: "36px" } },
  boxForm: {
    display: "flex",
    flexDirection: "column",
  },
  containerCU: {
    display: { tablet: "grid" },
    mt: { minMobile: "36px" },
    gridTemplateColumns: {
      tablet: "1fr 1fr",
    },
    columnGap: { desktop: "48px", tablet: "24px" },
  },
  h2ContactUs: {
    fontSize: { desktop: 36, tablet: 28 },
    lineHeight: { desktop: "36px", tablet: "28px" },
    textAlign: "center",
  },
  btnSubmit: {
    borderRadius: (theme) => theme.shape.borderRadius,
    border: (theme) => `1px solid ${theme.palette.primary.main}`,
    width: { minMobile: "100px" },
    height: { desktop: "39px" },
    p: { desktop: "4px" },
    pl: { desktop: "16px" },
    ml: "auto",
    textTransform: "none",
    color: (theme) => theme.palette.text.primary,
    "&:hover, &:focus": {
      bgcolor: (theme) => theme.palette.primary.dark,
      color: (theme) => theme.palette.text.secondary,
    },
  },
  iconBtnSubmit: {
    width: "32px",
    height: "32px",
  },
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
