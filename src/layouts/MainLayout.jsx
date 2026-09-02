import { Outlet } from "react-router-dom";

import ScrollToTop from "../components/layout/ScrollToTop/ScrollToTop";
import Navbar from "../components/layout/Navbar/Navbar";
import MobileBottomNav from "../components/MobileBottomNav/MobileBottomNav";
import SearchOverlay from "../components/SearchOverlay/SearchOverlay";
import Footer from "../components/layout/Footer/Footer";
function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SearchOverlay />

      <main>
        <Outlet />
      </main>

      <MobileBottomNav />
      <Footer />
    </>
  );
}

export default MainLayout;
