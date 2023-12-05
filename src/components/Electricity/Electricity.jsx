import { Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import { styles } from "./styles";

export default function Electricity() {
  const [electricityCount, setElectricityCount] = React.useState(1134147814);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setElectricityCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={styles.generalBox}>
      <Typography variant="h2" sx={styles.h2Electricity}>
        Electricity we produced for all time
      </Typography>
      <Divider orientation="vertical" sx={styles.divider} />
      <Box sx={styles.boxCount}>
        <Typography variant="h2" sx={styles.h2ElectricityCount}>
          {electricityCount.toLocaleString("de-DE")}
        </Typography>
        <Typography variant="h2" sx={styles.h2KWh}>
          kWh
        </Typography>
      </Box>
    </Box>
  );
}
