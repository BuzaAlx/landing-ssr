import React from "react";
import * as Styled from "./sectionLayout.style";
import { Button } from "../Form.styles";

const SectionLayout = ({ title, children, setIsModal }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Button
        big
        className="button"
        type="button"
        onClick={() => setIsModal(true)}
      >
        Create new entry
      </Button>
      {children}
    </Styled.Wrapper>
  );
};

export default SectionLayout;
