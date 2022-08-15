import styled from "styled-components";

export const Wrapper = styled("div")`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 10% 1fr;
  align-items: flex-start;
  & span {
    text-align: start;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
  }
  & .sun-editor {
    border: 2px solid #1f5a7b;
    border-radius: 20px;
    overflow: hidden;
    max-width: 645px;
    font-family: "Mulish";
  }
`;

export const Title = styled("h2")`
  text-align: center;
  color: #1f5a7b;
  font-size: 36px;
  font-weight: 700;
  line-height: 56px;
`;
