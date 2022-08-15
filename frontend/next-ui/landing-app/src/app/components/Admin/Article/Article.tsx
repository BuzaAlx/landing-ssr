import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";
import { IArticle } from "../types";

const Article: React.FC<{
  article: IArticle;
  openModal: Function;
  deleteItem: Function;
}> = ({ article, openModal, deleteItem }) => (
  <Styled.Wrapper>
    <Styled.Item>
      <Styled.List>
        <Styled.ListItem>
          <span>Title:</span>
          <span>{article.title}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Author: </span>
          <span>{article.author}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Created: </span>
          <span>{article.createdAt} </span>
        </Styled.ListItem>

        <Styled.ListItem>
          <span> Tags: </span>
          <ul>
            {article.tags.map((tag) => (
              <li>{tag.name}</li>
            ))}
          </ul>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Views:</span> {article.views}
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Picture:</span>
          <Styled.Image
            src={article.imageFile.s3FileUrl}
            alt={article.imageFile.s3FileUrl}
          />
        </Styled.ListItem>
      </Styled.List>
    </Styled.Item>
    <ItemButtons
      deleteItem={() => deleteItem("article", article.id)}
      openModal={openModal}
      item={article}
    />
  </Styled.Wrapper>
);

export default Article;
