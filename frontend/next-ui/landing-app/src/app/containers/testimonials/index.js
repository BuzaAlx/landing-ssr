import SectionWrapper from "app/components/section-wrapper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import nextjsSVG from "../../../images/portfolio/technologies/nextjs.svg";
import ReactCountryFlag from "react-country-flag";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials({ testimonials }) {
  console.log(testimonials);
  return (
    <SectionWrapper title="Testimonials">
      <div className="testimonials-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1350: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <Slide testimonial={testimonial} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}

const flagStyle = {
  width: "100%",
  height: "100%",
};

const Slide = ({ testimonial }) => {
  return (
    <div className="slide-container">
      <ReactCountryFlag
        className="slide__image"
        countryCode={testimonial.countryCode}
        svg
        style={flagStyle}
      />
      {/* <img className="slide__image" src={nextjsSVG.src} alt="customer_igor" /> */}
      <p className="slide__feedback">{testimonial.feedback}</p>
      <div className="slide__customer-info">
        <div className="slide-name">{testimonial.customerName}</div>
        <div className="slide-company-name">{testimonial.companyName}</div>
        <span className="slide-customer-position">
          {testimonial.customerPosition}
        </span>
      </div>
    </div>
  );
};
