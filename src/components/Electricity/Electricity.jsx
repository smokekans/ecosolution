import { Box, Divider, Typography } from "@mui/material";
import * as React from "react";

export default function Electricity() {
  const [electricityCount, setElectricityCount] = React.useState(1134147814);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setElectricityCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        mt: { desktop: "120px", tablet: "100px", minMobile: "36px" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { desktop: 48, tablet: 36 },
          lineHeight: { desktop: "48px", tablet: "36px" },
          width: { desktop: "491px", tablet: "368px", minMobile: "286px" },
          textAlign: "center",
        }}
      >
        Electricity we produced for all time
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          height: { tablet: "87px", minMobile: "48px" },
          width: "0.5px",
          my: "16px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { tablet: "24px", minMobile: "8px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { desktop: 164, tablet: 100, minMobile: 48 },
            fontWeight: "800",
            lineHeight: {
              desktop: "164px",
              tablet: "100px",
              minMobile: "48px",
            },
            color: (theme) => theme.palette.primary.main,
            width: { desktop: "890px" },
          }}
        >
          {electricityCount.toLocaleString("de-DE")}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { desktop: 36, tablet: 28, minMobile: 24 },
            lineHeight: { desktop: "36px", tablet: "48px", minMobile: "24px" },
            textTransform: "none",
          }}
        >
          kWh
        </Typography>
      </Box>
    </Box>
  );
}
