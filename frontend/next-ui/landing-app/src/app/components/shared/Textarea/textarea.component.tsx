import React from "react";
import * as Styled from "./textarea.styles";
import { ITextArea } from "../../../../types/components/index";

const Textarea: React.FC<ITextArea> = ({
  placeholder,
  name,
  onChange,
  value,
  errors,
  touched,
}) => (
  <Styled.TextWrapper>
    <Styled.Text
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      onFocus={() => (touched[name] = true)}
    />
    <Styled.Error>{name && touched[name] && errors?.[name]}</Styled.Error>
  </Styled.TextWrapper>
);

export default Textarea;
