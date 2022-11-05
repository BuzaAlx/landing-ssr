import React from "react";
import SectionWrapper from "../../components/section-wrapper";
import "./styles.scss";
import portolioChat from "../../images/portfolio/portfolio-chat.jpg";
import portolioSneakers from "../../images/portfolio/portfolio-sneakers-shop.jpg";
import portolioInstagram from "../../images/portfolio/potfolio-instagram.jpg";
import portolioWebApp from "../../images/portfolio/portfolio-webapp.jpg";

import nodeSVG from "../../images/portfolio/technologies/node.svg";
import reactSVG from "../../images/portfolio/technologies/react.svg";
import graphSVG from "../../images/portfolio/technologies/graphql.svg";
import tsSVG from "../../images/portfolio/technologies/typescript.svg";
import firebaseSVG from "../../images/portfolio/technologies/firebase.svg";
import reduxeSVG from "../../images/portfolio/technologies/redux.svg";
import paypalSVG from "../../images/portfolio/technologies/paypal.svg";
import materialSVG from "../../images/portfolio/technologies/material-ui.svg";
import sequelizeSVG from "../../images/portfolio/technologies/sequelize.svg";
import mysqlSVG from "../../images/portfolio/technologies/mysql.svg";

import koaSVG from "../../images/portfolio/technologies/koa.svg";
import nextjsSVG from "../../images/portfolio/technologies/nextjs.svg";
import mongoSVG from "../../images/portfolio/technologies/mongo.svg";
import aswS3SVG from "../../images/portfolio/technologies/aws-s3.svg";

export default function Portfolio() {
  return (
    <SectionWrapper title="Portfolio">
      <div className="grid-container porfolio container">
        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/landing-ssr">
              <img
                className="porfolio__card__image"
                src={portolioWebApp}
                alt="project-portfolio"
              />
            </a>
            <figcaption className="porfolio__card_name">
              Portfolio | Landing Page
            </figcaption>
            <p className="porfolio__card__description">
              Web application with information about me as developer
            </p>
            <div className="tech-list">
              <img src={reactSVG} alt="react" />
              <img src={nextjsSVG} alt="nextjs" />
              <img src={nodeSVG} alt="node" />
              <img src={koaSVG} alt="koa" />
              <img src={mongoSVG} alt="mongo" />
              <img src={aswS3SVG} alt="awsS3" />
            </div>
          </figure>
        </div>

        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/Instagram-clone-react-firebase-">
              <img
                className="porfolio__card__image"
                src={portolioInstagram}
                alt="project-chat"
              />
            </a>
            <figcaption className="porfolio__card_name">
              Instagram-clone | Social Network
            </figcaption>
            <p className="porfolio__card__description">
              Clone of popular instagram using Material UI on frontend
            </p>
            <div className="tech-list">
              <img src={reactSVG} alt="react" />
              <img src={firebaseSVG} alt="firebase" />
              <img src={reduxeSVG} alt="redux" />
              <img src={materialSVG} alt="materialUI" />
            </div>
          </figure>
        </div>

        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/InContact_ChatApp">
              <img
                className="porfolio__card__image"
                src={portolioChat}
                alt="project-chat"
              />
            </a>
            <figcaption className="porfolio__card_name">
              In Contact | Chat App
            </figcaption>
            <p className="porfolio__card__description">
              Chat bassed on GraphQL using subscriptions for real time changes
            </p>
            <div className="tech-list">
              <img src={reactSVG} alt="react" />
              <img src={nodeSVG} alt="node" />
              <img src={graphSVG} alt="graohql" />
              <img src={tsSVG} alt="typescript" />
              <img src={sequelizeSVG} alt="sequelize" />
              <img src={mysqlSVG} alt="mysql" />
            </div>
          </figure>
        </div>

        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/e-commerce-shop">
              <img
                className="porfolio__card__image"
                src={portolioSneakers}
                alt="project-chat"
              />
            </a>
            <figcaption className="porfolio__card_name">
              Sneakers | E-commerce
            </figcaption>
            <p className="porfolio__card__description">
              Sneakers shop wih admin page and firebase as backend
            </p>
            <div className="tech-list">
              <img src={reactSVG} alt="react" />
              <img src={firebaseSVG} alt="firebase" />
              <img src={reduxeSVG} alt="redux" />
              <img src={paypalSVG} alt="paypal" />
            </div>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
