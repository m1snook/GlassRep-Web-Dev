import React from "react";
import ReviewBox from "./ReviewBox";
/**
 *
 * @param {Object} props
 * @param {string} props.description
 * @param {string} props.productName
 * @param {Array<Object>} props.reviews
 * @returns
 */
const DetailTabs = ({ reviews, description, productName = "Ray ban" }) => {
  return (
    <div className="row px-xl-5">
      <div className="col">
        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
          <a
            className="nav-item nav-link active"
            data-toggle="tab"
            href="#tab-pane-1"
          >
            Description
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">
            Information
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">
            Reviews (2)
          </a>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="tab-pane-1">
            <h4 className="mb-3">Product Description</h4>
            <p>
              {description ??
                `Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
        <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.`}
            </p>
          </div>
          <div className="tab-pane fade" id="tab-pane-2">
            <h4 className="mb-3">Additional Information</h4>
            <p>
              Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
              Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
              diam ea vero et dolore rebum, dolor rebum eirmod consetetur
              invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum
              rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
              Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam
              consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
              nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit
              rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus
              eirmod takimata dolor ea invidunt.
            </p>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0">
                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                  </li>
                  <li className="list-group-item px-0">
                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                  </li>
                  <li className="list-group-item px-0">
                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                  </li>
                  <li className="list-group-item px-0">
                    Takimata ea clita labore amet ipsum erat justo voluptua.
                    Nonumy.
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0">
                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                  </li>
                  <li className="list-group-item px-0">
                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                  </li>
                  <li className="list-group-item px-0">
                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                  </li>
                  <li className="list-group-item px-0">
                    Takimata ea clita labore amet ipsum erat justo voluptua.
                    Nonumy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-pane-3">
            <div className="row">
              <div className="col-md-6">
                <h4 className="mb-4">
                  {reviews?.length ?? 0} reviews for "
                  {productName ?? "Rayban Aviators"}"
                </h4>

                <ReviewBox
                  content={null}
                  date={null}
                  name={null}
                  rating={3.5}
                />
                <ReviewBox
                  content={null}
                  date={null}
                  name={null}
                  rating={3.5}
                />
              </div>
              <div className="col-md-6">
                <h4 className="mb-4">Leave a review</h4>
                <small>Required fields are marked *</small>
                <div className="d-flex my-3">
                  <p className="mb-0 mr-2">Your Rating * :</p>
                  <div className="text-primary">
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="message">Your Review *</label>
                    <textarea
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group mb-0">
                    <input
                      type="submit"
                      defaultValue="Leave Your Review"
                      className="btn btn-primary px-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTabs;
