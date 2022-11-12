import React from "react";
import { IOverlay } from "../../../types/components/index";

const Overlay: React.FC<IOverlay> = ({ isOpen }) => {
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
};

export default Overlay;
