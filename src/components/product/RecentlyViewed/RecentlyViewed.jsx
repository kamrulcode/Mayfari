import "./RecentlyViewed.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import useLocalStorage from "../../../hooks/useLocalStorage";
import ProductCard from "../../ProductCard/ProductCard";

function RecentlyViewed() {
  const [history, setHistory] = useLocalStorage(
    "recent-products",

    [],
  );

  const clearHistory = () => {
    setHistory([]);
  };

  if (history.length === 0) return null;

  const remove = (id) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  return (
    <section className="recently-viewed">
      <div className="section-heading">
        <h2>Recently Viewed</h2>

        <button onClick={clearHistory}>Clear</button>
      </div>

      <Swiper
        spaceBetween={25}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {history.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} onRemove={remove} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default RecentlyViewed;
