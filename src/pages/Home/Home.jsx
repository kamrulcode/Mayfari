import Navbar from "../../components/layout/Navbar/Navbar";
import BestSeller from "../../sections/BestSeller/BestSeller";
import Categories from "../../sections/Categories/Categories";
import Hero from "../../sections/Hero/Hero";

function Home() {
  return (
    <>
      <Hero />

      <Navbar />
      <Categories />

      <BestSeller />
      {/* <LuxuryBox /> */}

      {/* <Newsletter /> */}
    </>
  );
}

export default Home;
