import React, { Component } from "react";
import './testimonials.scss';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="testimonials aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Testimonials</h2>
          <div className="content">
            <div className="item">
              <blockquote className="quote">
                <p>
                  <i className="fas fa-quote-left"></i>Ajinath is a fantastic person to work with, and is a multi-skilled and insightful colleague. Very good person. Great employee with a very strong problem solving skills. He is an asset to any company.
                </p>
              </blockquote>
              <p className="source">
                <span className="name">Vinay Kumar</span>
                <br />
                <span className="title">Staff Engineer-Product and Platform Engineering at Altimetrik</span>
              </p>
            </div>

            <p>
              <a className="more-link my-portfolio" href="https://www.linkedin.com/in/ajinath-sake-02b380191/">
                <i className="fas fa-external-link-alt"></i>More on Linkedin
              </a>
            </p>
          </div>
        </div>
      </aside>
    );
  }
}

export default Testimonials;
