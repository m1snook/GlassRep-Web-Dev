import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Display the featured carousel only on the home page
 * as part of the navbar
 * @param {Object} props
 * @param {boolean} props.feature Set to `true` to show
 * @returns carousel
 */
const Carousel = ({ feature }) => {
  console.log(feature);
  if (feature !== true) return null;
  return (
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ height: 410 }}>
          <img
            className="img-fluid"
            src="https://img3.storyblok.com/880x0/filters:no_upscale()/https://sil-media.storyblok.com/products/rotation/8719/8719_9040/0000.jpg"
            alt="Glasses"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 700 }}>
              <h4 className="text-light text-uppercase font-weight-medium mb-3">
                Avail Discounts on your First Order
              </h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                Find Your Best Pair
              </h3>
              <a href="#!" className="btn btn-light py-2 px-3">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{ height: 410 }}>
          <img
            className="img-fluid"
            src="https://cdn.stocksnap.io/img-thumbs/960w/sunglasses-sand_96YLE8L499.jpg"
            alt="Glasses"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 700 }}>
              <h4 className="text-light text-uppercase font-weight-medium mb-3">
                20% Off Your First Order
              </h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                Wear the Best
              </h3>
              <a href="#!" className="btn btn-light py-2 px-3">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{ height: 410 }}>
          <img
            className="img-fluid"
            src="https://media.wired.com/photos/5d1cde444f0e200008e4c6d4/2:1/w_2400,h_1200,c_limit/Gear-Sunglasses-Roka-Oslo-Ember-2.jpg"
            alt="Glasses"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 700 }}>
              <h4 className="text-light text-uppercase font-weight-medium mb-3">
                20% Off Your First Order
              </h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                Wear the Best
              </h3>
              <a href="#!" className="btn btn-light py-2 px-3">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#header-carousel"
        data-slide="prev"
      >
        <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
          <span className="carousel-control-prev-icon mb-n2" />
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#header-carousel"
        data-slide="next"
      >
        <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
          <span className="carousel-control-next-icon mb-n2" />
        </div>
      </a>
    </div>
  );
};

/**
 * The navbar with links.
 * @param {Object} props
 * @param {boolean} props.feature Set to `true` to show the carousel
 * when on homepage
 * @returns carousel
 */
const NavBar = ({ feature }) => {
  const {currentUser} = useAuth();
  return (
    <div className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="
              btn
              shadow-none
              d-flex
              align-items-center
              justify-content-between
              bg-primary
              text-white
              w-100
            "
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="
              collapse
              position-absolute
              navbar navbar-vertical navbar-light
              align-items-start
              p-0
              border border-top-0 border-bottom-0
              bg-light
            "
            id="navbar-vertical"
            style={{ width: "calc(100% - 30px)", zIndex: 1 }}
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              <div className="nav-item dropdown">
                <a href="#!" className="nav-link" data-toggle="dropdown">
                  Glasses <i className="fa fa-angle-down float-right mt-1"></i>
                </a>
                <div
                  className="
                    dropdown-menu
                    position-absolute
                    bg-secondary
                    border-0
                    rounded-0
                    w-100
                    m-0
                  "
                >
                  <a href="#!" className="dropdown-item">
                    Men's Glasses
                  </a>
                  <a href="#!" className="dropdown-item">
                    Women's Glasses
                  </a>
                  <a href="#!" className="dropdown-item">
                    Baby's Glasses
                  </a>
                </div>
              </div>
              <a href="#!" className="nav-item nav-link">
                Aviators
              </a>
              <a href="#!" className="nav-item nav-link">
                Sun Glasses
              </a>
              <a href="#!" className="nav-item nav-link">
                Optic Glasses
              </a>
              <a href="#!" className="nav-item nav-link">
                Anti Glare Glasses
              </a>
              <a href="#!" className="nav-item nav-link">
                Sportswear
              </a>
              <a href="#!" className="nav-item nav-link">
                Crizal
              </a>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav
            className="
              navbar navbar-expand-lg
              bg-light
              navbar-light
              py-3 py-lg-0
              px-0
            "
          >
            <a href="#!" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">GlassRep</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="shop" className="nav-item nav-link">
                  Shop
                </Link>
                <Link to="detail" className="nav-item nav-link">
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#!"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="cart" className="dropdown-item">
                      Shopping Cart
                    </Link>
                    <Link to="checkout" className="dropdown-item">
                      Checkout
                    </Link>
                    <Link to="customer" className="dropdown-item">
                      Customer Profile
                    </Link>
                  </div>
                </div>
                <Link to="contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <Link to="/power-cred" className="nav-item nav-link">
                  Power Credentials
                </Link>
                {/* <a href="#!" className="nav-item nav-link active">
                  Power Credentials
                </a> */}
                {!currentUser ? 
                <>
                  <Link to="login" className="nav-item nav-link">
                    Login
                  </Link>
                  <Link to="register" className="nav-item nav-link">
                    Register
                  </Link>
                </>
                : 
                <Link to="profile" className="nav-item nav-link active">{currentUser.email}</Link>
                }
              </div>
            </div>
          </nav>
          <Carousel feature={feature} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
