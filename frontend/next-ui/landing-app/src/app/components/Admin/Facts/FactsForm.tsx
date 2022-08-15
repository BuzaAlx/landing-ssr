import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { IFact } from "../types";
import * as Styled from "../Form.styles";
import { slides } from "app/img";

const FactsForm: React.FC<{
  fact?: IFact | undefined;
  close: Function;
}> = ({ fact, close }) => {
  const [title, setTitle] = useState(fact?.title || "");
  const [text, setText] = useState(fact?.text || "");
  const [showOnHomePage, setShowOnHomePage] = useState(
    fact?.showOnHomePage || false
  );
  const [iconFileId, setIconFileId] = useState(fact?.iconFile.id || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFact = {
      title,
      text,
      showOnHomePage,
      iconFileId,
    };

    fact
      ? updateAdminData("facts", fact.id, newFact).then(() => close())
      : createAdminData("facts", newFact).then(() => close());
  };

  const getImageId = (id) => {
    setIconFileId(id);
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {fact ? <h2>Edit Fact</h2> : <h2>Create new fact</h2>}
        <Styled.Label>
          <span>Fact title</span>
          <Styled.AdminTextInput
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </Styled.Label>
        <Styled.Label>
          <span>Fact text</span>
          <Styled.AdminTextArea
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </Styled.Label>
        <Styled.CheckboxContainer>
          <div>Show on page</div>
          <Styled.CheckboxLabel>
            <input
              type="checkbox"
              name="TechOption"
              checked={showOnHomePage}
              onChange={({ target: { checked } }) => setShowOnHomePage(checked)}
            />
            <Styled.CustomCheckbox selected={showOnHomePage}>
              <img src={slides.Check} alt="checkbox" />
            </Styled.CustomCheckbox>
          </Styled.CheckboxLabel>
        </Styled.CheckboxContainer>

        <Styled.PicturesWrapper>
          <span>Pictures:</span>
          <Images activeImage={fact?.iconFile} getImageId={getImageId} />
        </Styled.PicturesWrapper>

        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            disabled={!(title && text && iconFileId)}
          >
            {fact ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={() => close()}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default FactsForm;
