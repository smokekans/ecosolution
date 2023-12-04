import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowBottomIcon } from "../../image/svg/ArrowBottomIcon";
import * as React from "react";
import { HideQuestionIcon } from "../../image/svg/HideQuestionIcon";
import { ShowQuestionIcon } from "../../image/svg/ShowQuestionIcon";
import { styles } from "./styles";

const questions = [
  {
    name: "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    name: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      "Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions.",
  },
  {
    name: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer:
      "Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future.",
  },
  {
    name: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer:
      "EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact.",
  },
  {
    name: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer:
      "EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const scrollToContact = () => {
    const contactAnchor = document.getElementById("contact");
    if (contactAnchor) {
      const offset = 112;
      const targetPosition = contactAnchor.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="faq"
      sx={{
        mt: { desktop: "120px", tablet: "100px", minMobile: "26px" },
        mb: { minMobile: "24px" },
        display: { tablet: "grid" },
        gridTemplateColumns: {
          tablet: "1fr 1fr",
        },
        columnGap: { desktop: "48px", tablet: "24px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { desktop: 48, tablet: 36 },
          lineHeight: { desktop: "48px", tablet: "36px" },
          width: { desktop: "400px", minMobile: "320px" },
          mb: "24px",
          mx: { desktop: "auto" },
        }}
      >
        Frequently Asked Questions
      </Typography>

      <List
        sx={{
          p: 0,
          gridArea: "1 / 1 / 3",
        }}
      >
        {questions.map((question, index) => {
          const isOpen = index === openIndex;
          return (
            <React.Fragment key={index}>
              <Divider />
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 0,
                  py: { desktop: "24px", minMobile: "16px" },
                }}
              >
                <Button
                  onClick={() => handleClick(index)}
                  fullWidth
                  sx={{
                    fontSize: { desktop: 24, minMobile: 18 },
                    lineHeight: { desktop: "28.8px", minMobile: "21.6px" },
                    letterSpacing: { desktop: "-0.96px", minMobile: "-0.72px" },
                    justifyContent: "start",
                    textTransform: "none",
                    textAlign: "justify",
                    color: (theme) => theme.palette.primary.dark,
                    p: 0,
                    style: { backgroundColor: "none" },
                    "&:hover, &:focus": {
                      backgroundColor: "none",
                    },
                    ".MuiButtonBase-root:hover": {
                      backgroundColor: "none",
                    },
                    ":root": {
                      "&:hover": {
                        backgroundColor: "none",
                      },
                    },
                  }}
                  startIcon={
                    isOpen ? (
                      <HideQuestionIcon sx={styles.questionIcon} />
                    ) : (
                      <ShowQuestionIcon sx={styles.questionIcon} />
                    )
                  }
                >
                  {question.name}
                </Button>
                <Collapse in={isOpen}>
                  <ListItemText sx={styles.listItemText}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { desktop: 16 },
                        lineHeight: { desktop: "19.2px" },
                        letterSpacing: { desktop: "-0.64px" },
                      }}
                    >
                      {question.answer}
                    </Typography>
                  </ListItemText>
                </Collapse>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
      <Box
        sx={{
          mt: { tablet: 0, minMobile: "36px" },
          mb: { tablet: "inherit" },
          textAlign: "center",
          gridArea: "2/2",
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: { desktop: 24, minMobile: 18 },
            lineHeight: { desktop: "28.8px", minMobile: "21.6px" },
            letterSpacing: { desktop: "-0.96px", minMobile: "-0.72px" },
          }}
        >
          Didn&apos;t find the answer to your question?
        </Typography>
        <Button
          onClick={scrollToContact}
          endIcon={
            <ArrowBottomIcon
              sx={{
                fill: (theme) => theme.palette.primary.dark,
                "&:hover, &:focus": {
                  fill: (theme) => theme.palette.primary.main,
                },
              }}
            />
          }
          sx={{
            borderRadius: (theme) => theme.shape.borderRadius,
            bgcolor: (theme) => theme.palette.primary.main,
            width: "160px",
            height: "39px",
            textTransform: "none",
            mt: "12px",

            color: (theme) => theme.palette.text.primary,
            fill: (theme) => theme.palette.primary.dark,
            "&:hover, &:focus": {
              bgcolor: (theme) => theme.palette.primary.dark,
              color: (theme) => theme.palette.text.secondary,
              fill: (theme) => theme.palette.primary.main,
              ".MuiSvgIcon-root": {
                fill: (theme) => theme.palette.primary.main,
              },
            },
            ".MuiSvgIcon-root": {
              width: "16px",
              height: "16px",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
