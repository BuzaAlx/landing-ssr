import { useState } from "react";
import { uploadImage } from "services/api/adminApi";
import { Button } from "../Form.styles";
import * as Styled from "./ImagesUploader.style";

const ImageUploader: React.FC<{
  setImages: Function;
  images: any;
}> = ({ setImages, images }) => {
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((res) => {
      setImages([...images, ...res]);
      setFile("");
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setFile(file);
  };

  return (
    <Styled.Wrapper>
      {!file && (
        <input
          className="fileInput"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
      )}
      <Button
        className="submitButton"
        type="button"
        onClick={(e) => handleSubmit(e)}
      >
        Upload new
      </Button>
    </Styled.Wrapper>
  );
};

export default ImageUploader;
