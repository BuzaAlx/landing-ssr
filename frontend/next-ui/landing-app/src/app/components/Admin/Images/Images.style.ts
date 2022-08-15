import styled from "styled-components";

export const Wrapper = styled("div")`
  margin-left: 70px;
`;

export const ImagesWrapper = styled("div")`
  width: 605px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  & label {
    margin-top: 10px;
  }
  & .slide-image {
    width: 150px;
    height: 120px;
    object-fit: contain;
    padding: 0 20px;
  }
`;

export const SliderContainer = styled.div`
  max-width:605px;
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
