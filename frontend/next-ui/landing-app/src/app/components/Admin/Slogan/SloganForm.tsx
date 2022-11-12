import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import { ISlogan } from "../types";
import * as Styled from "../Form.styles";
import { slides } from "app/img";

const SloganForm: React.FC<{
  slogan?: ISlogan | undefined;
  close: Function;
}> = ({ slogan, close }) => {
  const [title, setTitle] = useState(slogan?.title || "");
  const [text, setText] = useState(slogan?.text || "");
  const [selected, setSelected] = useState(slogan?.selected || false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSlogan = {
      title,
      text,
      selected,
    };

    slogan
      ? updateAdminData("slogan", slogan.id, newSlogan).then(() => close())
      : createAdminData("slogan", newSlogan).then(() => close());
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {slogan ? <h2>Edit slogan</h2> : <h2>Create new slogan</h2>}
        <Styled.Label>
          <span>Slogan title</span>
          <Styled.AdminTextInput
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
            placeholder="Write slogan here"
          />
        </Styled.Label>
        <Styled.Label>
          <span> Slogan text</span>
          <Styled.AdminTextArea
            value={text}
            onChange={({ target: { value } }) => setText(value)}
            placeholder="Write some text here"
          />
        </Styled.Label>

        <Styled.CheckboxContainer>
          <div>Selected</div>
          <Styled.CheckboxLabel>
            <input
              type="checkbox"
              checked={selected}
              onChange={({ target: { checked } }) => setSelected(checked)}
            />
            <Styled.CustomCheckbox selected={selected}>
              <img src={slides.Check} alt="checkbox" />
            </Styled.CustomCheckbox>
          </Styled.CheckboxLabel>
        </Styled.CheckboxContainer>
        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            empty={!slogan}
            disabled={!(title && text)}
          >
            {slogan ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={() => close()}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default SloganForm;
