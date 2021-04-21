import React, { Component } from "react";
import './education.scss';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="education aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Education</h2>
          <div className="content">
            <div className="item">
              <h3 className="title">
                <i className="fas fa-graduation-cap"></i> Computer Engineering
              </h3>
              <h4 className="university">
                Mumbai University <span className="year">(2011-2014)</span>
              </h4>
            </div>
            <div className="item">
              <h3 className="title">
                <i className="fas fa-graduation-cap"></i> HSC Science
              </h3>
              <h4 className="university">
                Pune Board <span className="year">(2009-2010)</span>
              </h4>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Education;
