import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./button.styles";

const Button = ({ type, link, onClick, disabled, children }) => (
  <Styled.Button type={type} onClick={onClick} disabled={disabled}>
    {children}
  </Styled.Button>
);

Button.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  link: "#",
  type: "button",
  disabled: false,
  onClick: () => {},
};

export default Button;
