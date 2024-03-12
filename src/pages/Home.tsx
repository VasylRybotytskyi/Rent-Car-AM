import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import Hero from "../components/Hero";
import Container from "../components/Container";
import CarsSlide from "../components/CarsSlide";

const Home = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null;
  }

  return (
    <>
      <Hero />
      <Container header="Наші пропозиції">
        <CarsSlide />
      </Container>
    </>
  );
};

export default Home;
