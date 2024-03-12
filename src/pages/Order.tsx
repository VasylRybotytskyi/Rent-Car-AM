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
