import React, { Component } from "react";
import './languages.scss';

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="languages aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Languages</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li className="item">
                <span className="title">
                  <strong>English:</strong>
                </span>
                <span className="level">
                Professional Proficiency <br className="visible-xs" />
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                  <i className="fas fa-star"></i> <i className="fas fa-star-half"></i>{" "}
                  {/* <i className="fas fa-star"></i>{" "} */}
                </span>
              </li>
              <li className="item">
                <span className="title">
                  <strong>Hindi:</strong>
                </span>
                <span className="level">
                   Native Speaker <br className="visible-sm visible-xs" />
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>{" "}
                </span>
              </li>
              <li className="item">
                <span className="title">
                  <strong>Marathi:</strong>
                </span>
                <span className="level">
                   Native Speaker <br className="visible-sm visible-xs" />
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default Languages;
