import React, { Component } from "react";
import './basicInfo.scss';

class BaiscInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="info aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Basic Information</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span className="sr-only">Location:</span>Pune, India
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email:</span>
                <a className="my-portfolio" href="https://ajay.com">ajay.sake.tech@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-link"></i>
                <span className="sr-only">Website:</span>
                <a className="my-portfolio" href="https://ajay.com">https://www.website.com</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default BaiscInfo;
