export const styles = {
  boxIcons: {
    display: "flex",
    gap: "8px",
  },
  iconSocialNetwork: {
    width: "24px",
    height: "24px",
    fill: (theme) => theme.palette.primary.dark,
    stroke: (theme) => theme.palette.primary.dark,
    transition: "fill 0.3s ease, stroke 0.3s ease",
    "&:hover, &:focus": {
      fill: (theme) => theme.palette.primary.main,
      stroke: (theme) => theme.palette.primary.main,
    },
  },
};
