import React from "react";
import { LiaHackerrank } from "react-icons/lia";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/selva1399"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/kselvaganapathy1399/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://www.hackerrank.com/profile/selva1399"
        className="home__social-icon social-rank"
        target="_blank"
      >
        <LiaHackerrank />
      </a>
    </div>
  );
};

export default Social;
