import { Link } from "react-router-dom";

import products from "../../../data/products";

import "./RelatedProducts.scss";

function RelatedProducts({ product }) {
  if (!product) {
    return null;
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .filter((item) => {
      if (!product.category) {
        return true;
      }

      return item.category === product.category;
    })
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="related-products">
      <div className="related-products-heading">
        <span>CURATED FOR YOU</span>

        <h2>You May Also Like</h2>
      </div>

      <div className="related-products-grid">
        {relatedProducts.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.slug}`}
            className="related-product-card"
          >
            <div className="related-product-image">
              <img src={item.image} alt={item.name} />

              {item.isNew && <span className="related-product-badge">NEW</span>}
            </div>

            <div className="related-product-info">
              <h3>{item.name}</h3>

              <span>${item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
