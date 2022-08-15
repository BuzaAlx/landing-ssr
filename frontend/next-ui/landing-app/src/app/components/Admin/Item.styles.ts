import styled from "styled-components";

export const Wrapper = styled("div")`
  max-width: 645px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  .buttons {
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    button:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const Item = styled("div")`
  width: 100%;
  padding: 20px 75px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid #1f5a7b;
  border-radius: 20px;
  font-size: 14px;
  line-height: 32px;
  font-weight: 700;
  color: #1f5a7b;
`;

export const List = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled("li")`
  display: grid;
  grid-template-columns: minmax(auto, 150px) 1fr;
  & > span:nth-child(1) {
    color: #0c1033;
    padding-right: 20px;
    text-align: end;
  }
  & > ul {
    padding: 0;
    list-style: none;
  }
  & > img {
    height: 120px;
    width: auto;
  }
  & > span::first-letter {
    text-transform: uppercase;
  }
`;

export const Image = styled("img")`
  max-height: 170px;
  max-width: 170px;
  object-fit: contain;
`;
