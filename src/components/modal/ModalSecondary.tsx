import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormSecondary from "../Date/FormSecondary";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "600px" },
  color: "#ffffff",
  bgcolor: "#000",
  border: "2px solid #ffffff",
  borderRadius: "12px",
  boxShadow: 24,
  p: 3,
};

export default function ModalSecondary() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        color="secondary"
        variant="outlined"
        size="small"
        onClick={handleOpen}
      >
        Бронювати в один клік
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography textAlign="center" variant="h6" component="h2">
            Замовлення безкоштовного дзвінка
          </Typography>
          <FormSecondary />
        </Box>
      </Modal>
    </div>
  );
}
