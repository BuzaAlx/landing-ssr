import * as Styled from "./ItemButtons.styles";

const ItemButtons: React.FC<{
  openModal: Function;
  deleteItem: Function;
  item: any;
}> = ({ openModal, item, deleteItem }) => {
  return (
    <Styled.ButtonsContainer>
      <Styled.Button onClick={() => openModal(item)}>Edit</Styled.Button>
      <Styled.Button onClick={() => deleteItem(item.id)}>Delete</Styled.Button>
    </Styled.ButtonsContainer>
  );
};

export default ItemButtons;
