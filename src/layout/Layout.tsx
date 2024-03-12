import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/common/Loader";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
