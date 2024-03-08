import { Box, Typography } from "@mui/material";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import OrderItem from "../components/OrderItem";
import { Car } from "../Types/filterTypes";

const Order = () => {
  const car: Car = useSelector((state) => state.order.orderCars);
  return (
    <Box sx={{ mt: "70px", minHeight: "80vh" }}>
      <Container header="">
        {car && car.length > 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="w-full"
          >
            <OrderItem car={car} />
          </Box>
        ) : (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              paddingTop: "15%",
              color: "#fff",
            }}
          >
            У вас немає заброньованих авто
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Order;
