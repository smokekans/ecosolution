import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { MaximizeCircleIcon } from "../../image/svg/MaximizeCircleIcon";
import { GlobalEditIcon } from "../../image/svg/GlobalEditIcon";
import { CPUChargeIcon } from "../../image/svg/CPUChargeIcon";
import { RankingIcon } from "../../image/svg/RankingIcon";
import value1IMG from "../../image/photo/value1.jpg";
import value2IMG from "../../image/photo/value2.jpg";
import CardValue from "./CardValue";
import { styles } from "./styles";

const values = [
  {
    icon: <MaximizeCircleIcon sx={styles.iconValue} />,
    title: "Openness",
    description: "to the world, people, new ideas and projects",
  },
  {
    icon: <GlobalEditIcon sx={styles.iconValue} />,
    title: "Responsibility",
    description:
      "we are aware that the results of our work have an impact on our lives and the lives of future generations",
  },
  {
    icon: <CPUChargeIcon sx={styles.iconValue} />,
    title: "Innovation",
    description:
      "we use the latest technology to implement non-standard solutions",
  },
  {
    icon: <RankingIcon sx={styles.iconValue} />,
    title: "Quality",
    description:
      "we do not strive to be the first among others, but we want to be the best in our business",
  },
];

export default function Values() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("tablet"));

  return (
    <Box
      id="about"
      sx={{
        mt: { desktop: "120px", tablet: "100px", minMobile: "36px" },
      }}
    >
      <Box
        sx={{
          display: { tablet: "grid" },
          alignItems: { tablet: "center" },
          gridAutoFlow: { tablet: "column" },
          gridTemplateColumns: {
            desktop: "1fr 1fr 1fr",
            tablet: "1fr auto 1fr",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: { minMobile: "24px" },
            gridTemplateColumns: { tablet: "1 / 3" },
            width: { desktop: "365px", tablet: "272px" },
            fontSize: { desktop: 48 },
            lineHeight: { desktop: "48px" },
          }}
        >
          Main values of our company
        </Typography>
        {matches && (
          <Divider
            sx={{
              height: { desktop: "87px", tablet: "110px" },
              gridTemplateColumns: { desktop: "none", tablet: "2 / 3" },
              borderWidth: "0.5px",
              m: { desktop: "auto" },
            }}
          />
        )}
        <Typography
          variant="body2"
          sx={{
            textAlign: "justify",
            gridTemplateColumns: { tablet: "3 / 3" },
            ml: { tablet: "11px" },
            fontSize: { desktop: 16 },
            lineHeight: { desktop: "19.2px" },
            letterSpacing: { desktop: "-0.64px" },
          }}
        >
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the worlds energy needs.
        </Typography>
      </Box>

      <Box
        sx={{
          mt: { minMobile: "36px" },
          display: "grid",
          gridTemplateColumns: { tablet: "1fr 1fr" },
          columnGap: { tablet: "24px" },
          rowGap: { minMobile: "24px" },
          gridAutoFlow: "row",
          justifyItems: { tablet: "center" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            justifyItems: "center",
            gridTemplateColumns: { minMobile: "auto auto" },
            columnGap: { desktop: "48px", minMobile: "24px" },
          }}
        >
          <CardValue value={values[0]} />
          <CardValue value={values[1]} />
        </Box>
        {matches && (
          <Box
            component="img"
            alt="man worker firld by solar panels"
            src={value1IMG}
            sx={{
              width: {
                gridColumn: { tablet: "span 2" },
                desktop: "596px",
                tablet: "342px",
              },
              height: { desktop: "339px", tablet: "197px" },
              gridArea: "2 / 1 / 3 / 2",
            }}
          />
        )}
        {matches && (
          <Box
            component="img"
            alt="wind farms fields"
            src={value2IMG}
            sx={{
              width: {
                desktop: "596px",
                tablet: "342px",
              },
              height: { desktop: "339px", tablet: "197px" },
            }}
          />
        )}
        <Box
          sx={{
            display: "grid",
            justifyItems: "center",
            gridTemplateColumns: { minMobile: "auto auto" },
            columnGap: { desktop: "48px", minMobile: "24px" },
          }}
        >
          <CardValue value={values[2]} />
          <CardValue value={values[3]} />
        </Box>
      </Box>
    </Box>
  );
}
