import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { lazy } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./pages/Home"));
const CatalogPage = lazy(() => import("./pages/Catalog"));
const OrderPage = lazy(() => import("./pages/Order"));
const CarDetailsPage = lazy(() => import("./pages/CarDetails"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cars" element={<CatalogPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/cars/:id" element={<CarDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </>
  );
}

export default App;
