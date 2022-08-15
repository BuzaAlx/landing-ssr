import React, { useState } from "react";
import dynamic from "next/dynamic";
import * as Styled from "./TextEditor.styles";
import { ButtonWrapper, Button } from "../Form.styles";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = ({ content, setArticleContent, setIsEditorOpen }) => {
  const [articleMarkUpContent, setArticleMarkUpContent] = useState(
    content || ""
  );
  const handleChange = (formContent) => {
    setArticleMarkUpContent(formContent);
  };
  const handleSave = () => {
    setArticleContent(articleMarkUpContent);
    setIsEditorOpen(false);
  };
  return (
    <>
      <Styled.Title>Edit article</Styled.Title>
      <Styled.Wrapper>
        <span>Title</span>
        <div>
          <SunEditor
            placeholder="Write article here"
            setOptions={{
              toolbarContainer: "editorToolbar",
              stickyToolbar: "-1",
              buttonList: [
                [
                  "undo",
                  "redo",
                  "font",
                  "fontSize",
                  "formatBlock",
                  "paragraphStyle",
                  "blockquote",
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "lineHeight",
                  "table",
                  "link",
                  "image",
                  "imageGallery",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  "template",
                ],
              ],
            }}
            setDefaultStyle="height: 100%; font-size: 30px"
            setContents={content}
            onChange={handleChange}
            hideToolbar={false}
          />
          <ButtonWrapper>
            <Button empty type="button" onClick={() => handleSave()}>
              Create
            </Button>
            <Button type="button" onClick={() => setIsEditorOpen(false)}>
              Cancel
            </Button>
          </ButtonWrapper>
        </div>
      </Styled.Wrapper>
    </>
  );
};
export default TextEditor;
