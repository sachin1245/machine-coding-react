import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(images) || images.length <= 0) {
    return;
  }

  return (
    <section className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        &#10095;
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      {images.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <img src={image} alt={`slide ${index}`} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
