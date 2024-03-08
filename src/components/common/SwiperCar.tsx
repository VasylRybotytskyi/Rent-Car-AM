import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Card, CardMedia } from "@mui/material";

type CarImage = {
  url: string;
};

const SwiperCar: React.FC<{ images: CarImage[] }> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        {images.map((image, index) => (
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
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode]}
      >
        {images.map((image, index) => (
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
