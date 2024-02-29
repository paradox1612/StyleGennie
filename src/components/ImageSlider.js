import React, { useState, useEffect } from "react";
import Homescr1 from "../images/home-scr-1.png";
import Homescr2 from "../images/home-scr-2.png";
import Homescr3 from "../images/home-scr-3.png";

export default function ImageSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Homescr1, Homescr2, Homescr3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-70vh overflow-hidden">
      <img
        src={images[currentImage]}
        alt={`men and women in different clothes ${currentImage + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: currentImage === 0 ? 1 : 0 }}
      />
      <img
        src={images[(currentImage + 1) % images.length]}
        alt={`men and women in different clothes ${(currentImage + 1) % images.length + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: currentImage === images.length - 1 ? 1 : 0 }}
      />
      <img
        src={images[(currentImage + 2) % images.length]}
        alt={`men and women in different clothes ${(currentImage + 2) % images.length + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: currentImage === images.length - 2 ? 1 : 0 }}
      />
    </div>
  );
}
