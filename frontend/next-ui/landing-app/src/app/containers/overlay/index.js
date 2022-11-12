import React from "react";

export default function Overlay({ isOpen }) {
  return (
    <div className={`overlay ${isOpen ? "overlay--visible" : ""}`}>
      <ul className="overlay__list">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">PORTFOLIO</a>
        </li>
        <li>
          <a href="#">TESTIMONIALS</a>
        </li>
      </ul>
    </div>
  );
}
