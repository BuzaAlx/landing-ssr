import * as Styled from "../Item.styles";
import { IFact } from "../types";
import ItemButtons from "../ItemButtons/ItemButtons";

const Facts: React.FC<{
  fact: IFact;
  openModal: Function;
  deleteItem: Function;
}> = ({ fact, openModal, deleteItem }) => (
  <Styled.Wrapper>
    <Styled.Item>
      <Styled.List>
        <Styled.ListItem>
          <span>Title:</span> <span>{fact.title}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Text:</span> <span>{fact.text}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span> Show:</span>
          <span>{fact.showOnHomePage ? "true" : "false"}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Picture:</span>
          <img src={fact.iconFile.s3FileUrl} alt={fact.iconFile.s3FileUrl} />
        </Styled.ListItem>
      </Styled.List>
    </Styled.Item>
    <ItemButtons
      openModal={openModal}
      item={fact}
      deleteItem={() => deleteItem("facts", fact.id)}
    ></ItemButtons>
  </Styled.Wrapper>
);

export default Facts;
