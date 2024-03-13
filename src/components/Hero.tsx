import { Box, Stack, Typography } from "@mui/material";
import uiConfigs from "../configs/uiConfig.ts";
import hero from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
      }}
    >
      <Box
        sx={{
          paddingTop: {
            xs: "130%",
            sm: "80%",
            md: "60%",
            lg: "45%",
          },
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundImage: `url(${hero})`,
          position: "relative",
          zIndex: 1,
          "&::before": {
            content: '""',
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none",
            background: "rgba(0, 0, 0, 0.5)",
            ...uiConfigs.style.gradientBgImage.dark,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 3,
          }}
        >
          <Stack>
            <Typography sx={{ typography: { sm: "h2", xs: "h5" } }}>
              Швидко & Легкий спосіб оренди автомобіля
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
