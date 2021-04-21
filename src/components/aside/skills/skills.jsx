import React, { Component } from "react";
import './skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="skills aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Skills</h2>
          <div className="content">
            <p className="intro">
              Intro about your skills goes here. Keep the list lean and only
              show your primary skillset. You can always provide a link to your
              Linkedin or Github profile so people can get more info there.
            </p>

            <div className="skillset">
              <div className="item">
                <h3 className="level-title">
                  JavaScript
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Expert
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="96%"></div>
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  Angular
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Expert
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="90%"></div>
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  React
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Pro
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="80%"></div>
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                HTML5, CSS3, SASS & GIT
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Good
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="80%"></div>
                </div>
              </div>

              <p>
                <a className="more-link my-portfolio" href="https://github.com/ajaysake1992">
                  <i className="fas fa-external-link-alt"></i>More on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Skills;
