import { Outlet } from "react-router-dom";

// import Footer from "../components/layout/Footer/Footer";
import ScrollToTop from "../components/layout/ScrollToTop/ScrollToTop";
import Navbar from "../components/layout/Navbar/Navbar";
function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
