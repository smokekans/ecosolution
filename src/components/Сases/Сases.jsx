import * as React from "react";
import {
  Box,
  Button,
  Divider,
  MobileStepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import case2 from "../../image/photo/case2.jpg";
import case1 from "../../image/photo/case1.jpg";
import case3 from "../../image/photo/case3.jpg";
import case4 from "../../image/photo/case4.jpg";
import case5 from "../../image/photo/case5.jpg";
import { PrevBtnIcon } from "../../image/svg/PrevBtnIcon";
import { NextBtnIcon } from "../../image/svg/NextBtnIcon";
import { useSwipeable } from "react-swipeable";
import CardCase from "./CardCase";
import { styles } from "./styles";

const cases = [
  {
    place: "Lviv Region, Radekhiv town",
    name: "Private Enterprise “ZAKHIDNYI BUH”",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
    imgPath: case1,
  },
  {
    place: "Zhytomyr city",
    name: "Private Enterprise “Bosch”",
    description: "Solar Panels for industrial use",
    date: "November 2023",
    imgPath: case2,
  },
  {
    place: "Rivne city",
    name: "Private Enterprise “Biotech”",
    description: "Thermal modules",
    date: "October 2023",
    imgPath: case3,
  },
  {
    place: "Kherson city",
    name: "Private Enterprise “HealthyFarm”",
    description: "Wind power",
    date: "September 2021",
    imgPath: case4,
  },
  {
    place: "Zaporizhia city",
    name: "Private Enterprise “Biotech”",
    description: "Mini nuclear stations",
    date: "May 2021",
    imgPath: case5,
  },
];

export default function Cases() {
  const maxSteps = cases.length;
  const [activeStep, setActiveStep] = React.useState(0);
  const matches = useMediaQuery((theme) => theme.breakpoints.up("tablet"));

  const getOrder = (index, activeStep, maxSteps) => {
    return (index + maxSteps - activeStep) % maxSteps;
  };

  const handleNext = () => {
    setActiveStep(activeStep === maxSteps - 1 ? 0 : activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep === 0 ? maxSteps - 1 : activeStep - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <Box sx={styles.generalBox} id="cases">
      <Box sx={styles.headBox}>
        <Typography variant="h2" sx={styles.h2}>
          Successful cases of our company
        </Typography>

        {matches && <Divider sx={styles.dividerHead} />}

        <Box sx={styles.changeStepsBox}>
          <Box sx={styles.stepsBox}>
            <Typography variant="subtitle1" sx={{ width: "28px" }}>
              {formatNumber(activeStep + 1)}
            </Typography>
            <Typography variant="subtitle1" sx={styles.subtitle1}>
              /{formatNumber(maxSteps)}
            </Typography>
          </Box>

          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={styles.stepper}
            nextButton={
              <Button onClick={() => handleNext()}>
                <NextBtnIcon sx={styles.iconBtnChangeStep} />
              </Button>
            }
            backButton={
              <Button onClick={() => handleBack()}>
                <PrevBtnIcon sx={styles.iconBtnChangeStep} />
              </Button>
            }
          />
        </Box>
      </Box>

      <Box
        {...handlers}
        style={{ touchAction: "pan-y" }}
        sx={styles.swipeableBox}
      >
        <Box sx={styles.casesBox}>
          {cases.map((item, index) => (
            <Box
              key={index}
              style={{ order: getOrder(index, activeStep, maxSteps) }}
            >
              <CardCase item={item} click={() => handleNext()} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
