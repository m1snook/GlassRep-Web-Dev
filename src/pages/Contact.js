import React from "react";
import { Link } from "react-router-dom";

// TODO: Handle form inputs
const ContactPage = () => {
  return (
    <div>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Contact Us
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Contact</p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Feel Free To Reach Out For Any Queries</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate={true}>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required={true}
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required={true}
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required={true}
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows={6}
                    id="message"
                    placeholder="Message"
                    required={true}
                    data-validation-required-message="Please enter your message"
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <h5 className="font-weight-semi-bold mb-3">Reach Out To Us</h5>
            <p>
              Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
              duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et
              erat clita ipsum justo sed.Justo sed diam ut sed amet duo amet
              lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr
              erat sit sit. Dolor diam et erat clita ipsum justo sed.
            </p>
            <div className="d-flex flex-column mb-3">
              {/* <h5 className="font-weight-semi-bold mb-3" /> */}
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3" />
                India
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3" />
                contact@glassrep.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3" />
                +012 4535752
              </p>
            </div>
            <div className="d-flex flex-column"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
