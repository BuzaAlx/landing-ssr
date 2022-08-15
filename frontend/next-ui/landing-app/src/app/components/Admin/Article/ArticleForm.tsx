import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { IArticle } from "../types";
import * as Styled from "../Form.styles";
import BlogTags from "../BlogTags/BlogTags";
import TextEditor from "../TextEditor/TextEditor";
import { Button } from "app/components/shared/LinkButton/Button.style";

const ArticleForm: React.FC<{
  article?: IArticle | undefined;
  close: Function;
}> = ({ article, close }) => {
  const [title, setTitle] = useState(article?.title || "");
  const [author, setAuthor] = useState(article?.author || "");
  const [content, setContent] = useState(article?.content || "");
  const [tags, setTags] = useState(article?.tags || []);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [imageFileId, setimageFileId] = useState(article?.imageFile.id || "");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newArticle = {
      title,
      author,
      content,
      tagIds: tags,
      imageFileId,
    };

    article
      ? updateAdminData("article", article.id, newArticle).then((res) =>
          close()
        )
      : createAdminData("article", newArticle).then(() => close());
  }

  const getImageId = (id) => {
    setimageFileId(id);
  };

  return (
    <Styled.Wrapper>
      {isEditorOpen && (
        <>
          <TextEditor
            content={content}
            setArticleContent={setContent}
            setIsEditorOpen={setIsEditorOpen}
          ></TextEditor>
        </>
      )}
      {!isEditorOpen && (
        <Styled.Form onSubmit={handleSubmit}>
          {article ? <h2>Edit article</h2> : <h2>Create new article</h2>}
          <Styled.Label>
            <span>Title:</span>
            <Styled.AdminTextInput
              type="text"
              placeholder="Write article title here"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </Styled.Label>
          <Styled.Label>
            <span>Author:</span>
            <Styled.AdminTextInput
              type="text"
              placeholder="Write author’s name here"
              value={author}
              onChange={({ target: { value } }) => setAuthor(value)}
            />
          </Styled.Label>
          <Styled.Label>
            <span>Text</span>
            <Button type="button" onClick={() => setIsEditorOpen(true)}>
              Edit content
            </Button>
          </Styled.Label>
          <BlogTags currentTags={article?.tags || []} getTags={setTags} />
          <Styled.PicturesWrapper>
            <span>Pictures:</span>
            <Images activeImage={article?.imageFile} getImageId={getImageId} />
          </Styled.PicturesWrapper>
          <Styled.ButtonWrapper>
            <Styled.Button
              type="submit"
              disabled={!(title && author && content && imageFileId)}
            >
              {article ? "Save" : "Create"}
            </Styled.Button>
            <Styled.Button type="button" onClick={() => close()}>
              Cancel
            </Styled.Button>
          </Styled.ButtonWrapper>
        </Styled.Form>
      )}
    </Styled.Wrapper>
  );
};

export default ArticleForm;
