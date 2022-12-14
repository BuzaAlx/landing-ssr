import { useEffect, useState } from "react";
import { deleteAdminData, getAdminData } from "services/api/adminApi";
import { IIconFile } from "../types";
import ImageUploader from "../Images/ImageUploader";
import { Wrapper, Title } from "../SectionLayout/sectionLayout.style";
import * as Styled from "./ImagesPage.style";
import { slides } from "app/img";

const ImagesPage: React.FC<{}> = () => {
  const [images, setImages] = useState<IIconFile[]>([]);

  const getImages = async () => {
    const images = await getAdminData("file");
    setImages(images);
  };

  useEffect(() => {
    getImages();
  }, [images]);

  const deleteImage = (id: string) => {
    deleteAdminData("file", id).then(() => console.log("reload page pls"));
  };

  return (
    <>
      <Wrapper>
        <Title>Images</Title>
        <ImageUploader images={images} setImages={setImages}></ImageUploader>
        <Styled.List>
          {images.map((image) => (
            <li>
              <img src={image.url} width="80px"></img>
              <Styled.DeleteButton
                type="button"
                onClick={() => deleteImage(image.id)}
              >
                <img src={slides.deleteIcon} alt="delete button" />
              </Styled.DeleteButton>
            </li>
          ))}
        </Styled.List>
      </Wrapper>
    </>
  );
};

export default ImagesPage;
