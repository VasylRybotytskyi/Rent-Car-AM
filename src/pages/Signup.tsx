import { Box } from "@mui/material";
import uiConfigs from "../configs/uiConfig.js";
import FormSignup from "../components/Date/FormSignup.js";

const Signup = () => {
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
          backgroundImage: `url(https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg)`,
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
          <FormSignup />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
