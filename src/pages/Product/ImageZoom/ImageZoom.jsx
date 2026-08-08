import "./ImageZoom.scss";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { FiZoomIn } from "react-icons/fi";

function ImageZoom({ src, alt }) {
  const imageRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [style, setStyle] = useState({
    backgroundPosition: "50% 50%",
    backgroundSize: "180%",
  });

  const handleMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    animateBackground(x, y);

    setStyle((prev) => ({
      ...prev,
      backgroundSize: "180%",
    }));
  };

  const handleLeave = () => {
    setStyle({
      backgroundPosition: "50% 50%",
      backgroundSize: "100%",
    });
  };

  const animateBackground = (x, y) => {
    gsap.to(imageRef.current, {
      backgroundPosition: `${x}% ${y}%`,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={imageRef}
      className="image-zoom"
      style={{
        backgroundImage: `url(${src})`,
        ...style,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={loaded ? "loaded" : "loading"}>
        <div className="zoom-icon">
          <FiZoomIn />
        </div>
        <img src={src} alt={alt} onLoad={() => setLoaded(true)} />
      </div>
    </div>
  );
}

export default ImageZoom;
