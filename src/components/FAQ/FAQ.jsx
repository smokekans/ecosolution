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
    <Box id="faq" sx={styles.generalBox}>
      <Typography variant="h2" sx={styles.h2}>
        Frequently Asked Questions
      </Typography>

      <List sx={styles.list}>
        {questions.map((question, index) => {
          const isOpen = index === openIndex;
          return (
            <React.Fragment key={index}>
              <Divider />
              <ListItem sx={styles.listItem}>
                <Button
                  onClick={() => handleClick(index)}
                  fullWidth
                  sx={styles.listItemBtn}
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
                    <Typography variant="body2" sx={styles.textAnswer}>
                      {question.answer}
                    </Typography>
                  </ListItemText>
                </Collapse>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
      <Box sx={styles.boxSubtitle}>
        <Typography variant="subtitle2" sx={styles.subtitle}>
          Didn&apos;t find the answer to your question?
        </Typography>
        <Button
          onClick={scrollToContact}
          endIcon={<ArrowBottomIcon sx={styles.iconBtn} />}
          sx={styles.btn}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
