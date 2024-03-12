import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Card, CardMedia } from "@mui/material";
import { Car } from "../../Types/filterTypes";

const SwiperCar = ({ carInfo }: { carInfo: Car }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  return (
    <>
      <Swiper
        cssMode={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, FreeMode]}
        className="mainSwiper"
      >
        {carInfo?.imagePath?.map((image, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ borderRadius: "12px" }}>
              <CardMedia
                image={image.url}
                sx={{ height: { xs: 300, sm: 370, md: 440 } }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode]}
      >
        {carInfo?.imagePath?.map((image, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ borderRadius: "12px", cursor: "pointer" }}>
              <CardMedia
                image={image.url}
                sx={{ height: { xs: 65, sm: 70, md: 80 } }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCar;
