import styled from "styled-components";

export const Button = styled("button")`
  background: #0c1033;
  border-radius: 2em;
  box-shadow: 0 4px 9px rgba(151, 195, 249, 1);
  padding: 0.7em 2em;
  outline: none;
  border: 0;
  color: white;
  min-width: 200px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: 18px;
  & * {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: ${(props) => (props.disabled ? "#0c1033" : "#97c3f9")};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  &:active {
    background: #0c1033;
    opacity: 0.7;
  }
`;
