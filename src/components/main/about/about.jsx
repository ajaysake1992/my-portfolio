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
          I'm a seasoned Fullstack developer with over 8+ years of professional experience, and my passion for crafting exceptional user experiences has been the driving force behind my career. With a solid foundation as a full-stack developer, my journey has predominantly led me to the vibrant world of frontend development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
