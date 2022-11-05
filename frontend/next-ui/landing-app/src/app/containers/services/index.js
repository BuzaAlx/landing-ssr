import React from "react";
import "./styles.scss";
import landingSVG from "../../images/services/miniicon-landing.svg";
import hsdmethodsSVG from "../../images/services/miniicon-ux.svg";
import uiSVG from "../../images/services/miniicon-ui.svg";
import uxSVG from "../../images/services/miniicon-campaign.svg";
import protoSVG from "../../images/services/miniicon-logo.svg";
import segmentationSVG from "../../images/services/miniicon-bcard.svg";
import SectionWrapper from "../../components/section-wrapper";

const list = [
  {
    id: 1,
    img: landingSVG,
    title: "Landing Pages",
    text: "They represent the last step of your marketing campaign and a first contact with your customer.",
  },
  {
    id: 2,
    img: hsdmethodsSVG,
    title: "HCD Methods",
    text: " Miniicon of user experience Human Centered Design sets a whole universe of rules and methods to simplify and intensify your user's experience.",
  },
  {
    id: 3,
    img: uiSVG,
    title: "User Interfaces",
    text: "Miniicon of user interface User Interfaces A superb user interface can help your clients to navigate between sought features with a speed of light",
  },
  {
    id: 4,
    img: uxSVG,
    title: "UX workshops",
    text: "Ideation sessions and following evaluations are the best way to uncover users' journey across the galaxy of your product.",
  },
  {
    id: 5,
    img: protoSVG,
    title: "Prototypes",
    text: "Lo-Fi and Hi-Fi prototypes merge first ideas into well coordinated fleets enabling the execution of first stress tests",
  },
  {
    id: 6,
    img: segmentationSVG,
    title: "Market Segmentation & Personas",
    text: "The knowledge of relevant market segment and the use of verified personas serve as a fuel for your products on their way to customers.",
  },
];

export default function Services() {
  return (
    // <section className="services">
    //   <h2 className="services__title">What exactly can I do?</h2>

    <SectionWrapper title="What exactly can I do?">
      <div className="services__inner container">
        {list.map((el, i) => (
          <div className={`service-block ${i >= 3 ? "cleared-block" : ""}`}>
            <img src={el.img} alt="service " />
            <h4>{el.title}</h4>
            <p>{el.text}</p>
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
    // </section>
  );
}
