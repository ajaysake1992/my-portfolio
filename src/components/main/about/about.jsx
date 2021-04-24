import React, { Component } from "react";
import './about.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {heading} = this.props;
    return (
      <section className="about section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">{heading}</h2>
          <div className="content">
            <p>
            Senior Frontend Engineer with 5.2 years of professional experience as a fullstack developer but more into frontend web development.Utility enthusiastic.Worked on micro frontend based web application using Angular. <i className="fas fa-heart"></i> to build product and open to explore on backend technologies.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
