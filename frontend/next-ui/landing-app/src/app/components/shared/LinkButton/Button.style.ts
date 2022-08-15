import styled from "styled-components";

interface Props {
  small?: boolean;
}

export const Button = styled("a")<Props>`
  background-color: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 2em;
  padding: 0.7em;
  outline: none;
  font-weight: 700;
  border: 0;
  color: white;
  min-width: ${(props) => (props.small ? "144px" : "177px")};
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: 18px;
  margin-top: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonBgColorActive};
  }
  @media (max-width: 420px) {
    min-width: ${(props) => (props.small ? "90px" : "120px")};
    font-size: 14px;
  }
`;
