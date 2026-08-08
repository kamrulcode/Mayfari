import "./Product.scss";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductAccordion from "./ProductAccordion";
import StickyCart from "../../components/Product/StickyCart/StickyCart";
import Bundle from "../../components/Product/Bundle/Bundle";
// import RecentlyViewed from "../../components/Product/RecentlyViewed/RecentlyViewed";
import useCart from "../../hooks/useCart";

import { useParams } from "react-router-dom";
import products from "../../data/products";
import Button from "../../components/common/Button/Button";
// import useRecentlyViewed from "../../hooks/UseRecentlyViewed";
// import { products } from "./products";

function Product() {
  // const [history] = useRecentlyViewed(product);
  const { addToCart } = useCart();
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <main className="product-page">
      <div className="container">
        <div className="product-layout">
          <ProductGallery product={product} />

          <ProductInfo product={product} />
        </div>
        <StickyCart product={product} />

        <Bundle product={product} />

        <ProductAccordion />
        {/* <RecentlyViewed /> */}
        <Button onClick={() => addToCart(product)}>Add To Cart</Button>
      </div>
    </main>
  );
}

export default Product;
