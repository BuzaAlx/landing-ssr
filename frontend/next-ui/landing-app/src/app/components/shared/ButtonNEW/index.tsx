import React from "react";

export default function Button({ children, link = "/", filled }) {
  return (
    <a href={link} className={`btn ${filled ? "btn--filled" : ""}`}>
      {children}
    </a>
  );
}
