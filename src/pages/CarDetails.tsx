import { useParams } from "react-router-dom";
import { useGetCarsListQuery } from "../redux/services/carsApi";
import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import { Car } from "../Types/filterTypes";
import StarIcon from "@mui/icons-material/Star";
import { IoIosCheckmark } from "react-icons/io";
import ItemCarInfo from "../components/common/ItemCarInfo";
import SwiperCar from "../components/common/SwiperCar";
import ItemCharacteristics from "../components/common/ItemCharacteristics";
import ItemService from "../components/common/ItemService";
import ModalSecondary from "../components/modal/ModalSecondary";
import ModalPrimary from "../components/modal/ModalPrimary";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCarsListQuery();

  const carInfo: Car = data?.carLists.find((car: Car) => car.id === id);

  return (
    <Box
      sx={{
        width: "100%",
        gap: "20px",
        mt: "70px",
        px: "24px",
        minHeight: "100vh",
      }}
    >
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <SwiperCar carInfo={carInfo} />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h4">
              {carInfo?.name} {carInfo?.configuration} 2020
            </Typography>

            <Box display="flex" alignItems="center" gap={1}>
              <Typography display="flex" alignItems="center" variant="h6">
                <Typography variant="inherit" style={{ fontWeight: "bold" }}>
                  {carInfo?.price}&#8372;
                </Typography>
                /день
              </Typography>
              <Box display="flex" alignItems="end">
                {carInfo?.rating && (
                  <Rating
                    name="text-feedback"
                    value={carInfo?.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                )}
                <Typography variant="caption">(12відгуків)</Typography>
              </Box>
            </Box>

            <Stack spacing={1}>
              <ItemCharacteristics
                featureName="Обєм двигуна"
                featureValue="3.0л 600кс"
              />
              <ItemCharacteristics
                featureName="Коробка передач"
                featureValue={carInfo?.transmission}
              />
              <ItemCharacteristics
                featureName="Клас авто"
                featureValue={carInfo?.carClass}
              />
              <ItemCharacteristics
                featureName="Кількість дверей"
                featureValue="5"
              />
              <Box display="flex" alignItems="center " gap={1}>
                <Typography variant="h6">Максимальна швидкість:</Typography>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  {carInfo?.speedLimit}
                </Typography>
                км/г
              </Box>
              <Box display="flex" gap={2}>
                <ModalPrimary carInfo={carInfo} />
                <ModalSecondary />
              </Box>
            </Stack>
          </Stack>

          <Stack>
            <ItemService />
          </Stack>
        </Grid>

        <Grid item xs={12} md={12}>
          <ItemCarInfo
            title="Додаткові функції:"
            array={carInfo}
            icon={<IoIosCheckmark />}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography variant="h6">Опис: </Typography>
          <Typography p={2}>{carInfo?.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarDetails;
