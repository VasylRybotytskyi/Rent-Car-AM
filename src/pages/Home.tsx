import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Container from "../components/Container";
import CarsSlide from "../components/CarsSlide";

const Home = () => {
  return (
    <>
      <Hero />
      <Box>
        <Container header="Наші пропозиції">
          <CarsSlide />
        </Container>
      </Box>
    </>
  );
};

export default Home;
