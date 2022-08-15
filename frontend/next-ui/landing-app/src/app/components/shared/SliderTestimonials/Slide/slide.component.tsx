import React from "react";
import * as Style from "./slide.styled";
import { IProject } from "../../../../../types/components/index";
import { v4 as uuidv4 } from "uuid";
import IMAGES from "../../../../../consts/Images";

const Slide: React.FC<IProject> = ({ item }) => (
  <Style.SlideContainer key={item.id} className="testimonials-slide-container">
    <Style.SliderContent>
      <Style.SliderHeader>
        <Style.SliderHeaderTitle>{item.name}</Style.SliderHeaderTitle>
        <Style.SliderHeaderImg src="/spainFlag.png" />
        <span className="slider-header__country">Spain</span>
      </Style.SliderHeader>
      <Style.SliderHeaderSubtitle>
        {item.shortDescription}
      </Style.SliderHeaderSubtitle>
      <Style.SliderDescription>{item.fullDescription}</Style.SliderDescription>
      <div className="slider-technologies">
        {item.technologies.map((tech) => (
          <div className="slider-technology" key={uuidv4()}>
            <img
              className="slider-technology__img"
              key={tech.id}
              src={tech.iconUrl ? tech.iconUrl : IMAGES.NODE}
            />
            <span className="slider-technology__text">{tech.name}</span>
          </div>
        ))}
      </div>
      {item?.link && (
        <a href={item?.link} target="_blank" className="slider-link">
          <button className="slider-technologies__button" type="button">
            Project link
          </button>
        </a>
      )}
    </Style.SliderContent>
    <Style.SliderPicture
      className="slider-picture"
      src={item.imageUrl}
      alt={item.shortDescription}
    />
  </Style.SlideContainer>
);

export default Slide;
