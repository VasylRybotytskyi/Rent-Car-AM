import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormPrimary from "../Date/FormPrimary";
import { Car } from "../../Types/filterTypes";

interface CarInfoProps {
  carInfo: Car;
}

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

export default function ModalPrimary({ carInfo }: CarInfoProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(carInfo);

  return (
    <div>
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        onClick={handleOpen}
      >
        Бронювати
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography>{carInfo?.name}</Typography>
          <FormPrimary carInfo={carInfo} />
        </Box>
      </Modal>
    </div>
  );
}
