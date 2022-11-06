import React from "react";

export default function Button({
  children,
  link = "/",
  filled,
}: {
  children: any;
  link?: string | undefined;
  filled?: any;
}) {
  return (
    <a href={link} className={`btn ${filled ? "btn--filled" : ""}`}>
      {children}
    </a>
  );
}
