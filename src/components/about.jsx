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
              Write a brief intro about yourself. It's a good idea to include
              your personal interests and hobbies as well. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec. Commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
