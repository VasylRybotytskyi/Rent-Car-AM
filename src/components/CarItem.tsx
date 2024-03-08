import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Car } from "../Types/filterTypes";
import { Link } from "react-router-dom";
import { TbManualGearbox } from "react-icons/tb";
import uiConfigs from "../configs/uiConfig.js";
import { PiEngineFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";

const CarItem: FC<{ car: Car }> = ({ car }) => {
  const imageUrl = Array.isArray(car?.imagePath)
    ? car.imagePath.map((image) => image.url)
    : [];

  return (
    <Card
      sx={{
        minWidth: "260px",
        height: "100%",
        margin: "0 auto",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      <CardMedia image={imageUrl[0]} sx={{ height: 200 }} />
      <Stack
        component={Link}
        to={`/cars/${car.id}`}
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          color: "white",

          justifyContent: "space-between",
          ...uiConfigs.style.gradientBgImage.dark,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 1,
          }}
        >
          <Typography sx={{ fontWeight: "700", fontSize: "24px" }}>
            {car?.name}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" gap={2} p={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <TbManualGearbox />
            <Typography>Автомат</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <BsFillFuelPumpFill />
            <Typography>{car.carFuel}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <PiEngineFill />
            <Typography>3.5л</Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
};

export default CarItem;
