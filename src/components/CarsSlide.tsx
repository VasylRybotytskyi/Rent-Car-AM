import CarItem from "./CarItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetCarsListQuery } from "../redux/services/carsApi";
import { useEffect, useState } from "react";
import { Car } from "../Types/filterTypes";

const CarsSlide = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const { data } = useGetCarsListQuery();

  useEffect(() => {
    if (data) {
      setCars(data.carLists);
    }
  }, [data]);

  return (
    <Swiper
      spaceBetween={30}
      grabCursor={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      style={{ padding: "10px" }}
    >
      {cars?.map((car, index: number) => (
        <SwiperSlide key={index}>
          <CarItem car={car} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarsSlide;
