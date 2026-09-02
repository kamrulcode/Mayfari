import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import products from "../../data/products";

import "./SearchOverlay.scss";

function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const openSearch = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-search", openSearch);

    return () => {
      window.removeEventListener("open-search", openSearch);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeSearch = () => {
    setIsOpen(false);
    setSearch("");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="search-overlay">
      <div className="search-overlay-backdrop" onClick={closeSearch} />

      <div className="search-panel">
        <div className="search-header">
          <span>MAYFAIR</span>

          <button type="button" onClick={closeSearch} aria-label="Close search">
            <FiX />
          </button>
        </div>

        <div className="search-content">
          <p className="search-label">SEARCH OUR COLLECTION</p>

          <div className="search-input-wrapper">
            <FiSearch />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fragrance..."
              autoFocus
            />
          </div>

          {search && (
            <div className="search-results">
              <div className="search-results-header">
                <span>RESULTS</span>

                <span>{filteredProducts.length}</span>
              </div>

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="search-result"
                    onClick={closeSearch}
                  >
                    <img src={product.image} alt={product.name} />

                    <div>
                      <strong>{product.name}</strong>

                      <span>${product.price}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="no-results">No fragrances found.</p>
              )}
            </div>
          )}

          {!search && (
            <div className="popular-searches">
              <p>POPULAR SEARCHES</p>

              <div>
                {["Oud", "Rose", "Vanilla", "Musk", "Amber", "Woody"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSearch(item)}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
