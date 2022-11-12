import { useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Order from "../order";
import Portfolio from "../portfolio";
import Services from "../services";
import Testimonials from "../testimonials";
import Overlay from "../overlay";
import Banner from "../banner";
import { IHomeProps } from "../../../types/components/index";

const HomePage: React.FC<IHomeProps> = ({ projects, facts, testimonials }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-wrapper">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="main">
        <Services facts={facts} />
        <Order />
        <Portfolio projects={projects} />
        <Banner />
        <Testimonials testimonials={testimonials} />
      </main>
      <Footer />
      <Overlay isOpen={isOpen} />
    </div>
  );
};

export default HomePage;
