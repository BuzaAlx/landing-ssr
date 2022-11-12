import React from "react";
import SectionWrapper from "../../components/section-wrapper";

export default function Services({ facts }) {
  return (
    <SectionWrapper title="What exactly can I do?">
      <div className="services__inner container">
        {facts.map((fact, i) => (
          <div className={`service-block ${i >= 3 ? "cleared-block" : ""}`}>
            <img src={fact.iconFile.url} alt={fact.title} />
            <h4>{fact.title}</h4>
            <p>{fact.text}</p>
          </div>
        ))}

        <div className="cleaner"></div>
        <div className="text-bg-block">
          <div className="text-bg-block__text">
            For your product <br /> to lift
            <br /> off
          </div>
          <div className="text-bg-block__graphic">
            <div className="star"></div>
            <div className="square-triangle"></div>
            <div className="cross"></div>
            <div className="circle"></div>
            <div className="zigzag"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
