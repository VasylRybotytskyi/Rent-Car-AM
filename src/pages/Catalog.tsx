import { useEffect, useState } from "react";
import FilterBar from "../components/FiilterBar/FilterBar";
import { Box } from "@mui/material";
import Container from "../components/Container";
import CarsGrid from "../components/CarsGrid";
import { useGetCarsListQuery } from "../redux/services/carsApi";
import { Car, SelectedFilter } from "../Types/filterTypes";

const Catalog = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [checked, setChecked] = useState<SelectedFilter>({
    selectedBrands: [],
    selectedClasses: [],
    selectedPrices: [],
    selectedFuels: [],
  });
  const { data } = useGetCarsListQuery();

  useEffect(() => {
    if (data) {
      let filteredCars = data.carLists;
      if (checked.selectedBrands.length > 0) {
        filteredCars = filteredCars.filter((car: Car) =>
          checked.selectedBrands.includes(car.carBrand.toLowerCase())
        );
      }
      if (checked.selectedClasses.length > 0) {
        filteredCars = filteredCars.filter((car: Car) =>
          checked.selectedClasses.includes(car.carClass)
        );
      }
      if (checked.selectedPrices.length > 0) {
        filteredCars = filteredCars.filter((car: Car) =>
          checked.selectedPrices.includes(car.price)
        );
      }
      if (checked.selectedFuels.length > 0) {
        filteredCars = filteredCars.filter((car: Car) =>
          checked.selectedFuels.includes(car.carFuel)
        );
      }
      setCars(filteredCars);
    }
  }, [data, checked]);

  return (
    <>
      <FilterBar setChecked={setChecked} />

      <Box minHeight="72vh">
        <Container header="">
          <CarsGrid cars={cars} />
        </Container>
      </Box>
    </>
  );
};

export default Catalog;
