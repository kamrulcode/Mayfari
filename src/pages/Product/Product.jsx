import "./Product.scss";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductAccordion from "./ProductAccordion";
import StickyCart from "../../components/Product/StickyCart/StickyCart";
import Bundle from "../../components/Product/Bundle/Bundle";

import { useParams } from "react-router-dom";
import products from "../../data/products";

import useRecentlyViewed from "../../hooks/UseRecentlyViewed";
import { useEffect } from "react";
import RecentlyViewed from "../../components/product/RecentlyViewed/RecentlyViewed";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
// import { products } from "./products";

function Product() {
  const { addRecentlyViewed } = useRecentlyViewed();
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product);
    }
  }, []);

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
        <RelatedProducts product={product} />
        <RecentlyViewed />
      </div>
    </main>
  );
}

export default Product;
