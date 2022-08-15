import styled from "styled-components";

export const FooterWrapper = styled("footer")`
  width: 100vw;
  position: relative;
  max-width: 1200px;
  align-items: center;
  background: #0c1033;
  display: flex;
  padding: 1em 4em;
  justify-content: center;
  color: white;
  & > .mail {
    position: absolute;
    left: 4em;
  }
  & > div:last-child {
    position: absolute;
    right: 4em;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    & > .mail {
      position: static;
    }
    & > * {
      padding: 1em 0;
    }
    & > div:last-child {
      border-top: 1px solid white;
      position: static;
    }
  }
`;

export const Wrapper = styled("div")`
  background: #0c1033;
  display: flex;
  justify-content: center;
`;

export const DropBoxFooter = styled("div")`
  max-width: 1240px;
  padding: 0 10px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  color: white;
  justify-content: space-between;
  min-height: 120px;
  align-items: center;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const FooterDis = styled("div")`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const FooterAct = styled("div")`
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;
