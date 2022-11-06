import React from "react";

export default function SectionWrapper({ title, children }) {
  return (
    <section className="section-wrapper">
      <h2 className="section-wrapper__title">{title}</h2>
      {children}
    </section>
  );
}
