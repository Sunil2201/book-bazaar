import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
import {SlArrowRight} from "react-icons/sl"
import { NavLink } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const images = [`${process.env.PUBLIC_URL}/slider-image-1.jpg`, `${process.env.PUBLIC_URL}/slider-image-2.jpg`];

function Slider() {
  return (
    images.length > 0 && (
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={20}
        className="swiper-container"
      >
        {images.map((img, id) => (
          <SwiperSlide key={id}>
            <div
              style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="swiperSlideDiv"
            >
                <h3 className="welcomeMessage">Welcome to Book Bazaar,</h3>
                <h2 className="welcomeText">Your one stop destination to buy all your favorite books</h2>
                <button className="productRedirectBtn"><NavLink to="/products">Shop now <SlArrowRight/></NavLink></button>
            </div>
          </SwiperSlide>
        ))}
        <div slot="container-end" className="swiper-pagination"></div>
      </Swiper>
    )
  );
}

export default Slider;
