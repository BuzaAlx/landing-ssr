import SectionWrapper from "app/components/section-wrapper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import nextjsSVG from "../../../images/portfolio/technologies/nextjs.svg";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
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
          <SwiperSlide>
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
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </SectionWrapper>
  );
}

const Slide = () => {
  return (
    <div className="slide-container">
      <img className="slide__image" src={nextjsSVG.src} alt="customer_igor" />
      <p className="slide__feedback">
        Filip has worked flexibly and proactively has come up with ideas for
        improving the web administration of 3D printing center
      </p>
      <div className="slide__customer-info">
        <div className="slide-name">Ondřej Štefek</div>
        <div className="slide-company-name">3Dees s.r.o.</div>
        <span className="slide-customer-position">CEO</span>
      </div>
    </div>
  );
};
