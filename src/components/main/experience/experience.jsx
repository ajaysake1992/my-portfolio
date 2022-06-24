import React, { Component } from "react";
import "./experience.scss";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="experience section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Work Experience</h2>
          <div className="content">
            <div className="item">
              <h3 className="title">
                Associate -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">
                  Deutsche bank, Pune
                  </a>
                </span>{" "}
                <span className="year">(Jan 2022 - Present)</span>
              </h3>
              <p>Working as a Frontend Architect.</p>
            </div>
            <div className="item">
              <h3 className="title">
                Team Lead -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">
                    HCL Technologies Limited, Pune
                  </a>
                </span>{" "}
                <span className="year">(April 2021 - Jan 2022)</span>
              </h3>
              <p>Worked as a Senior Frontend Developer.</p>
            </div>
            <div className="item">
              <h3 className="title">
                Consultant -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">
                    Intellect Design Arena, Pune
                  </a>
                </span>{" "}
                <span className="year">(Sep 2018 - Apr 2021)</span>
              </h3>
              <p>Worked as a Senior Frontend Developer.</p>
            </div>
            <div className="item">
              <h3 className="title">
                Software developer - I -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">
                    Everestek Technosoft Solutions Private Limited, Mumbai
                  </a>
                </span>{" "}
                <span className="year">(Feb 2017 - Sep 2018)</span>
              </h3>
              <p>Worked as a Frontend Developer.</p>
            </div>

            <div className="item">
              <h3 className="title">
                Software Engineer -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">
                    Aloha Technology, Pune
                  </a>
                </span>{" "}
                <span className="year">(July 2015 - Aug 2016)</span>
              </h3>
              <p>Worked as a Frontend Developer.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
