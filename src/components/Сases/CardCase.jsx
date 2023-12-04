import { Box, Divider, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { CaseDetailBtnIcon } from "../../image/svg/CaseDetailBtnIcon";
import { styles } from "./styles";

export default function CardCase({ item, click }) {
  return (
    <Box sx={styles.cardCaseBox}>
      <Box
        component="img"
        sx={styles.cardCaseImage}
        src={item.imgPath}
        alt={item.name}
      />
      <Box sx={styles.infoCardCaseBox}>
        <Box sx={styles.infoWithBtnCardCaseBox}>
          <Box sx={styles.nameInfoCardCaseBox}>
            <Typography variant="subtitle2" sx={styles.subtitle2}>
              {item.place}
            </Typography>
            <Typography variant="subtitle2" sx={styles.subtitle2}>
              {item.name}
            </Typography>
          </Box>
          <IconButton
            aria-label="details"
            sx={styles.iconBtnDetails}
            onClick={click}
          >
            <CaseDetailBtnIcon sx={styles.iconDetails} />
          </IconButton>
        </Box>
        <Divider sx={styles.dividerCardCase} />
        <Box sx={styles.descriptioInfoCardCaseBox}>
          <Typography variant="body1" sx={styles.body1}>
            {item.description}
          </Typography>
          <Typography variant="body1">{item.date}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

CardCase.propTypes = {
  item: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
};
