import React from "react";
import SectionWrapper from "../../components/section-wrapper";
import Button from "app/components/shared/ButtonNEW";

export default function Portfolio({ projects }) {
  return (
    <SectionWrapper title="Portfolio">
      <div className="portfolio-wrapper container">
        <div className="grid-container porfolio container">
          {projects.map((p) => (
            <div key={p.id} className="porfolio__card">
              <figure className="portfolio__wrapper">
                <a href={p.projectLink}>
                  <img
                    className="porfolio__card__image"
                    src={p.imageFile.url}
                    alt={p.name}
                  />
                </a>
                <figcaption className="porfolio__card_name">
                  {p.name}
                </figcaption>
                <p className="porfolio__card__description">
                  {p.shortDescription}
                </p>
                <div className="tech-list">
                  {p.technologies.map((t) => (
                    <img src={t.iconFile.url} alt={t.name} />
                  ))}
                </div>
              </figure>
            </div>
          ))}
        </div>
        <div className="portfolio_explore">
          <h3>Explore more at</h3>
          <Button filled link="https://github.com/BuzaAlx/">
            Github
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
