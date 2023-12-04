import {
  Backdrop,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  Modal,
  Typography,
} from "@mui/material";
import { FacebookIcon } from "../../image/svg/FacebookIcon";
import { InstagramIcon } from "../../image/svg/instagramIcon";
import PropTypes from "prop-types";
import { BurgerArrowIcon } from "../../image/svg/BurgerArrowIcon";
import { styles } from "./styles";
import { appStyles } from "../../styles";
import { CloseIcon } from "../../image/svg/CloseIcon";
import { menuList } from "./menuList";

export default function ModalMenu({ open, handleClose }) {
  const scrollToAnchor = (anchor) => {
    const currentAnchor = document.getElementById(anchor);
    if (currentAnchor) {
      const offset = 112;
      const targetPosition = currentAnchor.offsetTop - offset;
      return window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        onClick: handleBackdropClick,
        sx: {
          backgroundColor: (theme) => theme.palette.text.disabled,
          ".css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
            backgroundColor: (theme) => theme.palette.text.disabled,
          },
        },
      }}
    >
      <Box sx={appStyles.container}>
        <Box sx={styles.genBox}>
          <List sx={{ p: 0 }}>
            <ListItemButton onClick={handleClose} sx={styles.itemClose}>
              <CloseIcon sx={styles.iconCloseMenu} />
              <Typography sx={styles.textClose}>close</Typography>
            </ListItemButton>

            <Divider sx={styles.divider} />
            {menuList.map((item, index) => {
              return (
                <ListItemButton
                  key={index}
                  href={item.href}
                  sx={styles.item}
                  onClick={() => {
                    handleClose();
                    scrollToAnchor(item.id);
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 24,
                      fontFamily: "Fira Sans",
                      lineHeight: "28.8px",
                      letterSpacing: "-0.96px",
                      height: "29px",
                      ...(window.location.hash === `#${item.id}` && {
                        color: (theme) => theme.palette.primary.main,
                      }),
                    }}
                  >
                    {item.name}
                  </Typography>
                  <BurgerArrowIcon sx={styles.iconMenu} />
                </ListItemButton>
              );
            })}
          </List>
          <Box sx={{ display: "flex" }}>
            <IconButton href="https://facebook.com">
              <FacebookIcon sx={styles.iconSNMenu} />
            </IconButton>
            <IconButton href="https://instagram.com">
              <InstagramIcon sx={styles.iconSNMenu} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

ModalMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
