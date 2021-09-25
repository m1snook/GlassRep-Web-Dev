import React from "react";
/**
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.date
 * @param {number} props.rating
 * @param {string} props.content
 */
const ReviewBox = ({ name, date, rating, content }) => {
  return (
    <div className="media mb-4">
      <img
        src="https://asset20.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2019/02/11522841877307-Carrera-Unisex-Square-Sunglasses-1006S-06J-60EZ-7321522841877285-6-e1549090933554.jpg"
        alt=""
        className="img-fluid mr-3 mt-1"
        style={{ width: "45px" }}
      />
      <div className="media-body">
        <h6>
          {name ?? "Sanchit Narang"}
          <small>
            {" "}
            - <i>{date ?? "01 May 2021"}</i>
          </small>
        </h6>
        <div className="text-primary mb-2">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
          <i className="far fa-star" />
        </div>
        <p>
          {content ??
            "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."}
        </p>
      </div>
    </div>
  );
};

export default ReviewBox;
