import React, { useEffect, useState } from "react";
import { certificatesData, certificatesNav } from "./Data";

const Certificates = () => {
  const [item, setItem] = useState({ name: "all" });
  const [certificates, setCertificates] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setCertificates(certificatesData);
    } else {
      const newCertificates = certificatesData.filter((certificate) => {
        return certificate.category.toLowerCase() === item.name;
      });
      setCertificates(newCertificates);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="certificate__filters">
        {certificatesNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? "active-certificate" : ""
              } certificate__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="certificate__container container grid">
        {certificates.map((item) => {
          return (
            <div className="certificate__card" key={item.id}>
              <img
                src={item.image}
                alt="certificate image"
                className="certificate__img"
              />
              <h3 className="certificate__title">{item.title}</h3>
              <a href="https://www.udemy.com/certificate/UC-a7984c3a-2f51-4c8b-8bcb-d3e140db3fef/" className="certificate__button" target="_blank">
                Check
                <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
