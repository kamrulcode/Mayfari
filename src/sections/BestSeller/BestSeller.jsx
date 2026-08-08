import "./BestSeller.scss";

import products from "../../data/products";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductCard from "../../components/product/ProductCard/ProductCard";

function BestSeller() {
  return (
    <section className="best-seller">
      <div className="container">
        <div className="section-heading">
          <span>Collection</span>

          <h2>Best Sellers</h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BestSeller;
