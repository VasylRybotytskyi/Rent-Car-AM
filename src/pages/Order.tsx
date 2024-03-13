import { Box, Typography } from "@mui/material";
import Container from "../components/Container";
import OrderItem from "../components/OrderItem";
import { useAppSelector } from "../hooks/use-redux";

const Order = () => {
  const cars = useAppSelector((state) => state.order.orderCars);

  return (
    <Box sx={{ mt: "70px", minHeight: "80vh" }}>
      <Container header="">
        {cars && cars.length > 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="w-full"
          >
            <OrderItem cars={cars} />
          </Box>
        ) : (
          <Typography
            sx={{
              color: "#fff",
              display: "grid",
              placeItems: "center",
              paddingTop: "200px",
            }}
          >
            Ви ще не забронювали авто
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Order;
