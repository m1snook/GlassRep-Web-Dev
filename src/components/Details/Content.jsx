import React, { useState } from "react";
/**
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @param {number|String} props.price Price of product in Rupees
 * @param {Array<String>} props.colors
 * @param {Array<String|number>} props.lensSizes Lens sizes in mm
 * @param {String|number} props.numReviews
 * @param {function(string, number|string, number) : void} props.onAddToCart Callback called with color, size and quantity selected
 * @returns
 */
const ProductContent = ({
  title,
  description,
  price,
  lensSizes = [1.5, 2.5, 3.75],
  colors,
  numReviews,
  onAddToCart,
}) => {
  const [colorSelected, setColorSelected] = useState(colors[0]);
  const [sizeSelected, setSizeSelected] = useState(lensSizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="col-lg-7 pb-5">
      <h3 className="font-weight-semi-bold">{title}</h3>
      <div className="d-flex mb-3">
        <div className="text-primary mr-2">
          <small className="fas fa-star" />
          <small className="fas fa-star" />
          <small className="fas fa-star" />
          <small className="fas fa-star-half-alt" />
          <small className="far fa-star" />
        </div>
        <small className="pt-1">({numReviews ?? 0} Reviews)</small>
      </div>
      <h3 className="font-weight-semi-bold mb-4">₹{price}</h3>
      <p className="mb-4">
        {description ??
          "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum."}
      </p>
      <div className="d-flex mb-3">
        <p className="text-dark font-weight-medium mb-0 mr-3">Lens Sizes:</p>
        <form>
          {lensSizes.map((size, i) => (
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id={`size-${i}`}
                name="size"
                onSelect={() => setSizeSelected(size)}
              />
              <label className="custom-control-label" htmlFor={`size-${i}`}>
                {size} mm
              </label>
            </div>
          ))}
        </form>
      </div>
      <div className="d-flex mb-4">
        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
        <form>
          {colors.map((color, i) => (
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id={`color-${i}`}
                name="color"
                onSelect={() => setColorSelected(color)}
              />
              <label className="custom-control-label" htmlFor={`color-${i}`}>
                {color}
              </label>
            </div>
          ))}
        </form>
      </div>
      <div className="d-flex align-items-center mb-4 pt-2">
        <div className="input-group quantity mr-3" style={{ width: "130px" }}>
          <div className="input-group-btn">
            <button
              className="btn btn-primary btn-minus"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              <i className="fa fa-minus" />
            </button>
          </div>
          <input
            type="text"
            className="form-control bg-secondary text-center"
            defaultValue={quantity}
          />
          <div className="input-group-btn">
            <button
              className="btn btn-primary btn-plus"
              onClick={() => setQuantity(quantity + 1)}
            >
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
        <button className="btn btn-primary px-3">
          <i
            className="fa fa-shopping-cart mr-1"
            onClick={(e) => onAddToCart(colorSelected, sizeSelected, quantity)}
          />{" "}
          Add To Cart
        </button>
      </div>
      <div className="d-flex pt-2">
        <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
        <div className="d-inline-flex">
          <a className="text-dark px-2" href="#!">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-dark px-2" href="#!">
            <i className="fab fa-twitter" />
          </a>
          <a className="text-dark px-2" href="#!">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-dark px-2" href="#!">
            <i className="fab fa-pinterest" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
