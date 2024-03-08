import { Box, Grid, Typography } from "@mui/material";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaUser, FaWifi } from "react-icons/fa";

const services = [
  {
    name: "GPS-навігатор",
    price: 500,
    icon: <FaMapMarkerAlt color="white" size={20} />,
  },
  {
    name: "Wifi",
    price: 500,
    icon: <FaWifi color="white" size={20} />,
  },
  {
    name: "Додатковий водій ",
    price: 1500,
    icon: <FaUser color="white" size={20} />,
  },
  {
    name: "Повний бак",
    price: 2500,
    icon: <BsFillFuelPumpFill color="white" size={20} />,
  },
];

const ItemService = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" mb={1}>
        Додаткові послуги:
      </Typography>
      <Grid container spacing={2}>
        {services.map(({ name, icon, price }) => (
          <Grid
            item
            xs={12}
            lg={6}
            display="flex"
            alignItems="center"
            gap={1}
            key={name}
          >
            {icon}
            <Typography>
              {name} ({price}&#8372;)
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemService;
