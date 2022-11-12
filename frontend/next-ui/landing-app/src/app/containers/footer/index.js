import Button from "app/components/shared/ButtonNEW";
import React from "react";

import githubSVG from "../../../images/social/github-logo.svg";
import instagramSVG from "../../../images/social/instagram-logo.svg";
import linkedinSVG from "../../../images/social/linkedin-logo.svg";
import twitterSVG from "../../../images/social/twitter-logo.svg";

export default function Footer() {
  return (
    <footer className="home_footer">
      <div className="footer_row container">
        <div className="footer-column">
          <h2>Send me an email</h2>
          <p>I live on same planet as you</p>
          <Button>buzakivi@gmail.com</Button>
        </div>
        <div className="footer-column footer__contacts">
          <h2 className="footer-column__title">Contacts</h2>
          <p className="footer-column__phone">
            Phone Number: <span>+380-66-52-000-58</span>
          </p>
          <p>City: m.Rivne</p>
          <p>Adress: Shevchenka 17</p>
        </div>
      </div>

      <div className="footer__social-icons">
        <h3>You can find me everywhere</h3>
        <ul className="footer__social-list">
          <li>
            <a href="https://github.com/BuzaAlx/">
              <img src={githubSVG.src} alt="github icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sashab94/">
              <img src={instagramSVG.src} alt="instagram icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={linkedinSVG.src} alt="linkedIn icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={twitterSVG.src} alt="twitter icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">Copyright @ 2021 Buza Alexander Web Developer</p>
    </footer>
  );
}
