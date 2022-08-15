import styled from "styled-components";

interface Props {
  active?: boolean;
}

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > h2 {
    text-align: center;
  }
`;
export const ContentWrapper = styled("div")`
  flex-grow: 1;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto 80px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Header Header Header Header"
    "Menu Table Table Table"
    "Menu Table Table Table";
`;

export const Menu = styled("div")`
  padding: 20px 61px;
  background-color: #0c1033;
  border-radius: 55px;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  color: #fff;
  & h3 {
    margin: 0 0 10px;
    font-family: Mulish;
    font-size: 36px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const MenuList = styled("div")`
  padding: 0;
  list-style: none;
`;

export const MenuListItem = styled("li")<Props>`
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    color: black;
  }
`;

export const InfoWrapper = styled("div")`
  grid-area: Table;
`;

//

export const HeaderWrapper = styled("div")`
  min-height: 160px;
  grid-area: Header;
  display: flex;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  background: white;
  padding: 1em 10px;
  flex: 1;
  @media screen and (max-width: 1023px) {
    padding: 1em 2em;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 0;
  }
`;

export const HeaderLogo = styled("img")`
  height: 87px;
  @media screen and (max-width: 1023px) {
    height: 67px;
  }
  @media screen and (max-width: 425px) {
    height: 47px;
  }
`;

export const HeaderItem = styled("div")`
  display: flex;
  justify-content: space-between;
  & > h2 {
    margin: 0 auto;
    font-family: Mulish;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 76px;
    letter-spacing: 0em;
    text-align: center;
  }
  &:nth-child(2) {
    flex-grow: 1;
  }
`;

export const Sidebar = styled("div")`
  grid-area: Menu;
  margin-right: 95px;
`;
