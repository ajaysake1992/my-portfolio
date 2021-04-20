import React, { Component } from "react";
import './experience.scss';

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
                Consultant -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">Intellect Design Arena</a>
                </span>{" "}
                <span className="year">(Sep 2018 - Apr 2021)</span>
              </h3>
              <p>
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Donec
                vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                Etiam sit amet orci eget eros faucibus tincidunt.
              </p>
            </div>
            <div className="item">
              <h3 className="title">
                Software developer - I -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">Everestek Technosoft Solutions Private Limited</a>
                </span>{" "}
                <span className="year">(Feb 2017 - Sep 2018)</span>
              </h3>
              <p>
                Vivamus a tortor eu turpis pharetra consequat quis non metus.
                Aliquam aliquam, orci eu suscipit pellentesque, mauris dui
                tincidunt enim. Sed fringilla mauris sit amet nibh. Donec
                sodales sagittis magna.
              </p>
            </div>

            <div className="item">
              <h3 className="title">
                Software Engineer -{" "}
                <span className="place">
                  <a href="https://www.intellectdesign.com/">Aloha Technology</a>
                </span>{" "}
                <span className="year">(July 2015 - Aug 2016)</span>
              </h3>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
