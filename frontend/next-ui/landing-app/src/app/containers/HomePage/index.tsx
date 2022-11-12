import { useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Order from "../order";
import Portfolio from "../portfolio";
import Services from "../services";
import Testimonials from "../testimonials";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div className="main-wrapper">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="main">
        <Services />
        <Order />
        <Portfolio />
        <Order />
        <Testimonials />
      </main>
      <Footer />
      <div className={`overlay ${isOpen ? "overlay--visible" : ""}`}></div>
    </div>
  );
};

export default HomePage;
