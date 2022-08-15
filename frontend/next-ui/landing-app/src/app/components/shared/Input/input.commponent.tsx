import React from "react";
import * as Styled from "./input.styles";
import { IInput } from "../../../../types/components/index";

const Input: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  errors,
  touched,
}) => {
  return (
    <Styled.InputWrapper>
      <Styled.Input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        onFocus={() => (touched[name] = true)}
      />
      <Styled.Error>{name && touched[name] && errors?.[name]}</Styled.Error>
    </Styled.InputWrapper>
  );
};

export default Input;
