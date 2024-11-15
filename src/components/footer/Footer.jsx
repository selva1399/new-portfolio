import React from "react";
import "./footer.css";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* <h1 className="footer__title">SELVA</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testmonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.github.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.dribbble.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-dribbble"></i>
          </a>
        </div> */}

        <span className="footer__copy">
         SELVA © { year }
        </span>
      </div>
    </footer>
  );
};

export default Footer;
