import React from "react";
import SectionWrapper from "../../components/section-wrapper";

import portolioChat from "../../../images/portfolio/portfolio-chat.jpg";
import portolioSneakers from "../../../images/portfolio/portfolio-sneakers-shop.jpg";
import portolioInstagram from "../../../images/portfolio/potfolio-instagram.jpg";
import portolioWebApp from "../../../images/portfolio/portfolio-webapp.jpg";

import nodeSVG from "../../../images/portfolio/technologies/node.svg";
import reactSVG from "../../../images/portfolio/technologies/react.svg";
import graphSVG from "../../../images/portfolio/technologies/graphql.svg";
import tsSVG from "../../../images/portfolio/technologies/typescript.svg";
import firebaseSVG from "../../../images/portfolio/technologies/firebase.svg";
import reduxeSVG from "../../../images/portfolio/technologies/redux.svg";
import paypalSVG from "../../../images/portfolio/technologies/paypal.svg";
import materialSVG from "../../../images/portfolio/technologies/material-ui.svg";
import sequelizeSVG from "../../../images/portfolio/technologies/sequelize.svg";
import mysqlSVG from "../../../images/portfolio/technologies/mysql.svg";

import koaSVG from "../../../images/portfolio/technologies/koa.svg";
import nextjsSVG from "../../../images/portfolio/technologies/nextjs.svg";
import mongoSVG from "../../../images/portfolio/technologies/mongo.svg";
import aswS3SVG from "../../../images/portfolio/technologies/aws-s3.svg";

export default function Portfolio() {
  return (
    <SectionWrapper title="Portfolio">
      <div className="grid-container porfolio container">
        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/landing-ssr">
              <img
                className="porfolio__card__image"
                src={portolioWebApp.src}
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
              <img src={reactSVG.src} alt="react" />
              <img src={nextjsSVG.src} alt="nextjs" />
              <img src={nodeSVG.src} alt="node" />
              <img src={koaSVG.src} alt="koa" />
              <img src={mongoSVG.src} alt="mongo" />
              <img src={aswS3SVG.src} alt="awsS3" />
            </div>
          </figure>
        </div>

        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/Instagram-clone-react-firebase-">
              <img
                className="porfolio__card__image"
                src={portolioInstagram.src}
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
              <img src={reactSVG.src} alt="react" />
              <img src={firebaseSVG.src} alt="firebase" />
              <img src={reduxeSVG.src} alt="redux" />
              <img src={materialSVG.src} alt="materialUI" />
            </div>
          </figure>
        </div>

        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/InContact_ChatApp">
              <img
                className="porfolio__card__image"
                src={portolioChat.src}
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
              <img src={reactSVG.src} alt="react" />
              <img src={nodeSVG.src} alt="node" />
              <img src={graphSVG.src} alt="graohql" />
              <img src={tsSVG.src} alt="typescript" />
              <img src={sequelizeSVG.src} alt="sequelize" />
              <img src={mysqlSVG.src} alt="mysql" />
            </div>
          </figure>
        </div>

        <div className="porfolio__card">
          <figure className="portfolio__wrapper">
            <a href="https://github.com/BuzaAlx/e-commerce-shop">
              <img
                className="porfolio__card__image"
                src={portolioSneakers.src}
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
              <img src={reactSVG.src} alt="react" />
              <img src={firebaseSVG.src} alt="firebase" />
              <img src={reduxeSVG.src} alt="redux" />
              <img src={paypalSVG.src} alt="paypal" />
            </div>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
