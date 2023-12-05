import { CPUChargeIcon } from "../../image/svg/CPUChargeIcon";
import { GlobalEditIcon } from "../../image/svg/GlobalEditIcon";
import { MaximizeCircleIcon } from "../../image/svg/MaximizeCircleIcon";
import { RankingIcon } from "../../image/svg/RankingIcon";
import { styles } from "./styles";

export const value = [
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
