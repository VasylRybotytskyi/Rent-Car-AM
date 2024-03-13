import { Box } from "@mui/material";
import FormLogin from "../components/Date/FormLogin";
import uiConfigs from "../configs/uiConfig.js";
import hero from "../assets/images/hero.jpg";

const Login = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
      }}
    >
      <Box
        sx={{
          minHeight: "90vh",
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
          <FormLogin />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
