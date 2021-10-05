import React from "react";
import Carousel from "../components/Details/Carousel";
import ProductContent from "../components/Details/Content";
import DetailTabs from "../components/Details/Tabs";

const DetailPage = (props) => {
  const numRatings = 25;
  const numReviews = 2;
  return (
    <>
      <DetailPageHeader />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <Carousel
            imageLinks={[
              "https://images-na.ssl-images-amazon.com/images/I/61I2f4G%2BXML._AC_SY450_.jpg",
              "https://cwcdn.coolwinks.com/mobile/mobile-prod-images-lite/S66C6624-1.jpg",
              "https://cwcdn.coolwinks.com/mobile/mobile-prod-images-lite/S_S33A5845-1.jpg",
            ]}
          />
          <ProductContent
            title="New Fastrack Aviators"
            description="Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum."
            colors={["Black", "White", "Red", "Blue", "Green"]}
            lensSizes={[1.5, 2.5, 3.75]}
            onAddToCart={(colorSelected, lensSize, quantity) =>
              console.log("Selected!")
            }
            price={250}
            numReviews={numRatings}
          />
          <DetailTabs reviews={[1, 2]} description="" productName="Aviator" />
        </div>
      </div>
    </>
  );
};

export default DetailPage;

const DetailPageHeader = () => (
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "300px" }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">
        Product Detail
      </h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <a href="#!">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Shop Detail</p>
      </div>
    </div>
  </div>
);
