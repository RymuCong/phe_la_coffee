import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const banners = [
    { className: "banner__bn1", label: "" },
    { className: "banner__bn2", label: "" },
    { className: "banner__bn3", label: "" },
    { className: "banner__bn4", label: "" },
    { className: "banner__bn5", label: "" },
  ];

  return (
      <div className="banner">
        <Slider {...settings}>
          {banners.map((banner, index) => (
              <div key={index} className={`banner__slide ${banner.className}`}>
                <h3>{banner.label}</h3>
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default Banner;