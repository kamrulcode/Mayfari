import { useState } from "react";

// import img1 from "../../assets/images/gift.png";
// import img2 from "../../assets/images/gift.png";
// import img3 from "../../assets/images/gift.png";
// import img4 from "../../assets/images/gift.png";
import "./Product.scss";
// import ImageZoom from "./ImageZoom/ImageZoom";

// const images = [img1, img2, img3, img4];

function ProductGallery({ product }) {
  // const [active, setActive] = useState(images[0]);

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    // <div className="gallery">
    //   <div className="thumbs">
    //     <img
    //       src={product.img}
    //       onClick={() => setActive(product.img)}
    //       className={active === product.img ? "active" : ""}
    //     />
    //   </div>

    //   <div className="main-image">
    //     <ImageZoom src={active} alt="Luxury Candle" />
    //   </div>
    // </div>
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
