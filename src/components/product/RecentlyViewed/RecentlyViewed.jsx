import { Link } from "react-router-dom";

import useRecentlyViewed from "../../../hooks/useRecentlyViewed";

import "./RecentlyViewed.scss";

function RecentlyViewed() {
  const { recentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="recently-viewed">
      <div className="recently-viewed-heading">
        <span>DISCOVER MORE</span>

        <h2>Recently Viewed</h2>
      </div>

      <div className="recently-viewed-grid">
        {recentlyViewed.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.slug}`}
            className="recently-viewed-card"
          >
            <div className="recently-viewed-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="recently-viewed-info">
              <h3>{product.name}</h3>

              <span>${product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecentlyViewed;
