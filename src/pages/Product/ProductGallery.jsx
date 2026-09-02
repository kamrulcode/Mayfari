import { useState } from "react";
import "./Product.scss";

function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="product-gallery">
      <div className="product-thumbnails">
        {product.images.map((image, index) => (
          <button
            key={index}
            className={selectedImage === image ? "active" : ""}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`${product.name} ${index + 1}`} />
          </button>
        ))}
      </div>

      <div className="product-main-image">
        <img src={selectedImage} alt={product.name} />
      </div>
    </div>
  );
}

export default ProductGallery;
