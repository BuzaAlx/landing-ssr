import React from "react";
import * as Styled from "./slider.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onChangeSlideEA } from "../../../../services/event";
import { SamplePrevArrow, SampleNextArrow } from "../../shared/Slider/arrows";

const SliderWorks: React.FC<{ children: React.ReactNodeArray }> = ({
  children,
}) => {
  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow forWorks top={30} />,
    prevArrow: <SamplePrevArrow forWorks top={30} />,
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "Our Code", slide: current }),
    className: "slides",
  };

  return (
    <Styled.SliderContainer style={{ width: "90%" }}>
      <Slider {...settings}>{children.map((slide) => slide)}</Slider>
    </Styled.SliderContainer>
  );
};

export default SliderWorks;
