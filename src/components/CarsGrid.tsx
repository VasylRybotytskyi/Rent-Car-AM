import { Grid, Typography } from "@mui/material";
import CarItem from "./CarItem";
import { Car } from "../Types/filterTypes";

const CarsGrid = ({ cars }: { cars: Car[] }) => {
  return (
    <>
      {cars.length > 0 ? (
        <Grid container spacing={1} sx={{ margin: "-8px" }}>
          {cars?.map((car) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={car.id}
              sx={{ padding: "8px" }}
            >
              <CarItem car={car} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          sx={{
            color: "#fff",
            display: "grid",
            placeItems: "center",
            paddingTop: "200px",
          }}
        >
          Нічого не знайдено
        </Typography>
      )}
    </>
  );
};

export default CarsGrid;
