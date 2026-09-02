import BestSeller from "../../sections/BestSeller/BestSeller";
import Categories from "../../sections/Categories/Categories";
import Hero from "../../sections/Hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Categories />

      <BestSeller />
      {/* <LuxuryBox /> */}

      {/* <Newsletter /> */}
    </>
  );
}

export default Home;
