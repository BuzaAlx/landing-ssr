import React from "react";
import Button from "../../components/shared/Button";
import "./styles.scss";
import "./stylesBackground.scss";

export default function Order() {
  return (
    <section className="section-order">
      <h2 className="section-order__title">Need a website?</h2>
      <h3 className="section-order__subtitle">
        Or some other services to bring you success?
      </h3>
      <Button filled>Contact me</Button>
      <h3 className="section-order__subtitle">
        You'll make my antenna blip. No kidding.
      </h3>
      <div className="section-order-graphic">
        <div className="blue-planet"></div>
        <div className="satellite"></div>
        <div className="astro-guy">
          <div className="dribbble-logo-bottom"></div>
        </div>
        <div className="red-planet"></div>
      </div>
    </section>
  );
}
