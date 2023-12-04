import { Box, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function CardValue({ value }) {
  return (
    <Box
      sx={{
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
      }}
    >
      <Box
        sx={{
          p: { desktop: "48px 24px", minMobile: "12px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { maxMobile: "8px", minMobile: "4px" },
          }}
        >
          {value.icon}
          <Typography
            variant="h3"
            sx={{
              fontSize: { desktop: 32 },
              lineHeight: { desktop: "48px" },
            }}
          >
            {value.title}
          </Typography>
        </Box>
        <Divider
          sx={{ mt: { minMobile: "33px" }, mb: { minMobile: "12px" } }}
        />
        <Typography
          variant="body2"
          sx={{
            fontSize: { desktop: "16px" },
            lineHeight: { desktop: "19.2px" },
            letterSpacing: { desktop: "-0.64px" },
            textAlign: "justify",
          }}
        >
          {value.description}
        </Typography>
      </Box>
    </Box>
  );
}
CardValue.propTypes = {
  value: PropTypes.object.isRequired,
};
