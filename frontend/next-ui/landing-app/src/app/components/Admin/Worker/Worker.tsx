import ItemButtons from "../ItemButtons/ItemButtons";
import { IWorker } from "../types";
import * as Styled from "../Item.styles";

const Worker: React.FC<{
  worker: IWorker;
  openModal: Function;
  deleteItem: Function;
}> = ({ worker, openModal, deleteItem }) => {
  console.log(worker);
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <Styled.List>
          <Styled.ListItem>
            <span>Name: </span>
            <span>{worker.name}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Position:</span> <span>{worker.position}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Text:</span> <span>{worker.text}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Show:</span>
            <span>{worker.showOnHomePage ? "true" : "false"}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Picture:</span>
            <img
              src={worker.imageFile.s3FileUrl}
              alt={worker.imageFile.s3FileUrl}
            />
          </Styled.ListItem>
        </Styled.List>
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem("worker", worker.id)}
        openModal={openModal}
        item={worker}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Worker;
