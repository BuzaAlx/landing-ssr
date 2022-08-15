import styled from "styled-components";

export const Wrapper = styled("div")``;

export const Form = styled("form")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.buttonBgColor};
  & > h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 56px;
  }
  & > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    text-align: center;
    margin: 0 0 15px;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
  & .form__text,
  .form__input {
    width: 70%;
    padding: 5px;
  }
  & .form__text {
    resize: none;
    min-height: 100px;
  }
  & .form__checkbox {
    justify-content: center;
  }
  & .form__checkbox input {
    margin-left: 10px;
  }
  .buttons {
    margin: 20px 0 0;
  }
  .buttons button:not(:last-child) {
    margin-right: 20px;
  }
`;
