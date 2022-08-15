import styled from "styled-components";

const imgSize = {
  w: "35px",
  h: "35px",
};

const Arrow = styled.div`
  position: absolute;
  width: ${imgSize.w};
  height: ${imgSize.h};
  @media (max-width: 420px) {
    width: 25px;
    height: 25px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    top: 25%;
  }
  @media screen and (max-width: 600px) {
    top: 20%;
  }
`;

export const SliderPrev = styled(Arrow)`
  z-index: 2;
  cursor: pointer;
  left: 0;
`;

export const SliderNext = styled(Arrow)`
  z-index: 999;
  cursor: pointer;
  right: 0%;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  & .slicke-slide > div > {
    margin: auto;
  }

  & .slick-slider {
    width: 100%;
    height: 100%;
    & .slick-list,
    & .slick-list .slick-track {
      display:flex;
      width: 100%;
      height: 100%;
      & > div > div {
        width: 100%;
        height: 100%;
      }
    }
  }

  & .slides *:focus {
    outline: 0;
    outline: none;
  }

  & .slick-next:before,
  & .slick-prev:before {
    content: none;
  }

  & .slick-dots {
    & > li > button::before {
      margin-top: 12px;
      opacity: 1;
      color: #97c3f9;
    }
    & .slick-active {
      color: #0c1033;
    }
  }
  & .slider-picture {
    height:500px;
    object-fit: contain;
    @media screen and (max-width: 1025px) { 
        height:400px;
    }
    @media screen and (max-width: 650px) { 
      height:230px;
  }
`;
