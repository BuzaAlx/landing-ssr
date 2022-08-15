import styled from "styled-components";

const imgSize = {
  w: "35px",
  h: "35px",
};

interface Props {
  top: number;
  forWorks?: boolean;
}

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
`;

export const SliderPrev = styled(Arrow)<Props>`
  z-index: 1000;
  left: ${(props) => (props.forWorks ? "0" : "5%")};
  top: ${(props) => `${props.top}% `};
  @media (min-width: 1025px) {
    top: ${(props) => (props.forWorks ? "50%" : "")};
  }
  @media (max-width: 650px) {
    top: ${(props) => (props.forWorks ? `${props.top - 10}% ` : "")};
  }
  @media (max-width: 420px) {
    top: ${(props) => (props.forWorks ? "15%" : "")};
    left: ${(props) => (props.forWorks ? "-5%" : "0")};
  }
`;

export const SliderNext = styled(Arrow)<Props>`
  z-index: 1000;
  right: ${(props) => (props.forWorks ? "0" : "5%")};
  top: ${(props) => `${props.top}% `};
  @media (min-width: 1025px) {
    top: ${(props) => (props.forWorks ? "50%" : "")};
  }
  @media (max-width: 650px) {
    top: ${(props) => (props.forWorks ? `${props.top - 10}% ` : "")};
  }
  @media (max-width: 420px) {
    top: ${(props) => (props.forWorks ? "15%" : "")};
    right: ${(props) => (props.forWorks ? "-5%" : "0")};
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  & .slick-slider {
    margin: 0 1em;
    @media screen and (max-width: 1000px) {
      margin: 0 5em;
    }
    @media screen and (max-width: 650px) {
      margin: 0;
    }
  }
  & .slick-list {
    background-color: "red";
  }
  & .slick-slide {
    display: flex;
    justify-content: center;
  }
  & .slide-container {
    display: flex !important;
    justify-content: center;
  }
  & .slick-slide > div > div > img {
    margin: auto;
    @media screen and (max-width: 450px) {
      width: 355px;
    }
    @media screen and (max-width: 350px) {
      width: 100%;
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
`;
