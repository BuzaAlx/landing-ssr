import styled from "styled-components";

export const TextWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    width: 100%;
  }
`;
export const Text = styled("textarea")`
  resize: none;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid #0c1033;
  border-radius: 4px;
  min-height: 100px;
`;

export const Error = styled("div")`
  min-height: 16px;
  margin-top: 0.5em;
  color: red;
  font-size: 0.7em;
`;
