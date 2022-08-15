import styled from "styled-components";

export const List = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  & > li {
    padding: 0 20px 20px 0;
    position: relative;
    flex-basis: 25%;
  }
`;

export const DeleteButton = styled("button")`
  height: 25px;
  border: 2px solid #1f5a7b;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  right: 15%;
  top: 0%;
  transform: translateY(-50%);
`;
