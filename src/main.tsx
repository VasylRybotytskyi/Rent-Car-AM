import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReduxProvider from "./redux/provider.tsx";
import DateProvider from "./utils/LocalizationProvider.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DateProvider>
          <App />
        </DateProvider>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);
