import React from "react";
/**
 *
 * @param {Object} props
 * @param {Array} props.imageLinks Image src links to display in the carousel
 * @returns
 */
const Carousel = ({ imageLinks }) => {
  return (
    <div className="col-lg-5 pb-5">
      <div
        id="product-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner border">
          {imageLinks.map((link, i) => (
            <div key={i} className="carousel-item">
              <img src={link} className="w-100 h-100" alt="Product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
