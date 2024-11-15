import React from "react";
import "./certificate.css";
import Certificates from "./Certificates";

const Certificate = () => {
    return (
        <section className="certificate section" id="certificates">
            <h2 className="section__title">Certificates</h2>
            <span className="section__subtitle">My Learnings</span>

            <Certificates />
        </section>
    );
}

export default Certificate;