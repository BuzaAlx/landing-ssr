import styled from "styled-components";

export const Wrapper = styled("div")`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

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
export const FactItem = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    margin-left: 30px;
    width: 100px;
  }
`;
