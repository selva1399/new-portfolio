import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex "
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          {/* <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex " : "qualification__button button--flex"}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div> */}
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">NGM College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2017 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">M.Sc. CS</h3>
                <span className="qualification__subtitle">NGM College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2020 - 2022
                </div>
              </div>

            </div>

          </div>

          {/* <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Product Designer</h3>
                  <span className="qualification__subtitle">TCS</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2022 - 2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">

                <div></div>
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Full Stack Developer</h3>
                  <span className="qualification__subtitle">Microsoft</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2024 - present
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
