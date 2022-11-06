import React from "react";
import { motion, useScroll } from "framer-motion";
import BurgeMenu from "../BurgerMenu";
import Button from "../../components/shared/ButtonNEW";

const Header: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <header className="header">
        <div className="header-top">
          <nav className="header-navigation">
            <ul className="header-navigation__list">
              <li className="header-navigation__item">
                <Button>My blog</Button>
              </li>
              <li className="header-navigation__item">
                <Button>Contacts</Button>
              </li>
            </ul>
          </nav>
          <a href="/" className="changle-language-btn">
            change language to <strong>UKR</strong>
          </a>
        </div>
        <div className="header__info">
          <h1 className="header__info-title">Buza Oleksandr</h1>
          <h1 className="header__info-subtitle">
            Full-Slack
            <span className="bullet"> • </span>
            Web-Developer
          </h1>
          <h2>Explore the secrets of a successful product</h2>
          <div className="header__button-group">
            <Button filled>Contitue</Button>
            <Button>buzasocial@gmail.com</Button>
          </div>
        </div>
        <div className="header-background">
          <div className="bg-bottom-planet"></div>
          <div className="bg-rocket"></div>

          <div
            className="bg-red-sun"
            style={{ transform: "translateX:(20px)" }}
          ></div>
          <motion.div
            className="bg-red-sun"
            style={{ translateX: scrollYProgress }}
          />

          <div className="bg-yellow-moon"></div>
          <div className="bg-green-planet"></div>
          <div className="bg-commet"></div>
          <div className="bg-blue-planet"></div>
          <div className="bg-macbook"></div>
          <div className="bg-particles"></div>
        </div>
      </header>
      <BurgeMenu />
    </>
  );
};

export default Header;