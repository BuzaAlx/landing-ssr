import React from "react";

export default function BurgerMenu({ setIsOpen, isOpen }) {
  return (
    <div
      className={isOpen ? "open" : ""}
      id="nav-icon4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
