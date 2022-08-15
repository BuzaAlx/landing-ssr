import styled from "styled-components";

export const Wrapper = styled("div")``;

export const Form = styled("form")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  & > label {
    margin: 0 0 15px;
  }
  & .form__text,
  .form__title {
    width: 400px;
    margin-left: 10px;
    padding: 5px;
  }
  & .form__text {
    resize: none;
    min-height: 100px;
  }

  .buttons {
    margin: 20px 0 0;
  }
  .buttons button:not(:last-child) {
    margin-right: 20px;
  }
`;
