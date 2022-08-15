import { IFeaturedTechnology } from "../types";
import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";

const FeaturedTechology: React.FC<{
  featuredTechnology: IFeaturedTechnology;
  openModal: Function;
  deleteItem: Function;
}> = ({ featuredTechnology, openModal, deleteItem }) => (
  <Styled.Wrapper>
    <Styled.Item>
      <Styled.List>
        <Styled.ListItem>
          <span>Name: </span>
          <span>{featuredTechnology.name}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Text: </span>
          <span>{featuredTechnology.text}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Picture:</span>
          <Styled.Image
            src={featuredTechnology.imageFile.s3FileUrl}
            alt={featuredTechnology.imageFile.s3FileUrl}
          />
        </Styled.ListItem>
      </Styled.List>
    </Styled.Item>
    <ItemButtons
      openModal={openModal}
      item={featuredTechnology}
      deleteItem={() => deleteItem("featuredTechnology", featuredTechnology.id)}
    ></ItemButtons>
  </Styled.Wrapper>
);

export default FeaturedTechology;
