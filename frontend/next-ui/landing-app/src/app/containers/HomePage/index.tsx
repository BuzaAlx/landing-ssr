import { useState, useEffect } from "react";
import Header from "../header";
import Order from "../order";
import Portfolio from "../portfolio";
import Services from "../services";

const HomePage: React.FC = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">
        <Services />
        <Order />
        <Portfolio />
      </main>
    </div>
  );
};

export default HomePage;
