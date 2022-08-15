import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";
import { ITechnology } from "../types";

const Techology: React.FC<{
  technology: ITechnology;
  openModal: Function;
  deleteItem: Function;
}> = ({ technology, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <Styled.List>
          <Styled.ListItem>
            <span>Name:</span> <span>{technology.name}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Category:</span> <span>{technology.category}</span>
          </Styled.ListItem>

          <Styled.ListItem>
            <span>Picture:</span>
            <Styled.Image
              src={technology.iconFile.s3FileUrl}
              alt={technology.iconFile.s3FileUrl}
            />
          </Styled.ListItem>
        </Styled.List>
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem("technology", technology.id)}
        openModal={openModal}
        item={technology}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Techology;
