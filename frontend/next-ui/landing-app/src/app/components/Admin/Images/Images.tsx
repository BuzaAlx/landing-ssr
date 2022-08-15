import { useEffect, useState } from "react";
import { getAdminData } from "services/api/adminApi";
import { IIconFile } from "../types";
import * as Styled from "./Images.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../../../img/";
import { onChangeSlideEA } from "../../../../services/event";
import { CheckboxLabel, CustomCheckbox } from "../Form.styles";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "app/components/shared/Slider/arrows";

const Images: React.FC<{
  activeImage?: IIconFile | undefined;
  getImageId: Function;
}> = ({ activeImage, getImageId }) => {
  const [images, setImages] = useState<IIconFile[]>([]);
  const [imageID, setImageID] = useState(activeImage?.id || "");
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    getImages();
  }, [isUploaded]);

  const getImages = async () => {
    const images = await getAdminData("file");
    setImages(images);
  };

  const handleImageChange = (id: string) => {
    setImageID(id);
    getImageId(id);
  };

  let settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow img={slides.AdminVectorRight} forWorks top={50} />
    ),
    prevArrow: (
      <SamplePrevArrow img={slides.AdminVectorLeft} forWorks top={50} />
    ),
    afterChange: (current) =>
      onChangeSlideEA({ sliderName: "Our Code", slide: current }),
    className: "slides",
  };

  return (
    <Styled.Wrapper>
      <Styled.ImagesWrapper>
        <Styled.SliderContainer>
          <Slider {...settings}>
            {images.map((image) => (
              <CheckboxLabel>
                <input
                  type="radio"
                  name="imageOption"
                  checked={imageID === image.id}
                  onChange={() => handleImageChange(image.id)}
                />
                <img className="slide-image" src={image.s3FileUrl}></img>
                <CustomCheckbox sliderLabel selected={imageID === image.id}>
                  <img src={slides.Check} alt={slides.Check} />
                </CustomCheckbox>
              </CheckboxLabel>
            ))}
          </Slider>
        </Styled.SliderContainer>
      </Styled.ImagesWrapper>
    </Styled.Wrapper>
  );
};

export default Images;
