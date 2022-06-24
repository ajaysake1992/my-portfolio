import React from "react";
import './about.scss';

function About(props) {

  const { heading } = props;

  return (
    <section className="about section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">{heading}</h2>
        <div className="content">
          <p>
          Frontend Architect with more than six years of professional experience as a fullstack developer but more into frontend development.Utility enthusiastic.Worked on micro frontend based web applications using Angular and React. <i className="fas fa-heart"></i> to build product and open to explore on backend technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
