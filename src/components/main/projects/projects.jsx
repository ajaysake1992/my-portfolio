import React, { Component } from "react";
import './projects.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="latest section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Projects</h2>
          <div className="content">
            <div className="item featured text-center">
              <div className="featured-image has-ribbon">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/">
                  <img
                    className="img-fluid project-image rounded shadow-sm"
                    src="assets/images/projects/project-featured.jpg"
                    alt=""/>
                </a>
                <div className="ribbon">
                  <div className="text">New</div>
                </div>
              </div>

              <h3 className="title mb-3">
                <a
                  className="text-decoration-projects"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/">
                  My PortFolio
                </a>
              </h3>

              <div className="desc text-left">
                <p>
                  I have designed and developed my own portfolio using React, Redux. And have deployed this on firebase platform as of now.
                </p>
              </div>
            </div>
            <hr className="divider" />
            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/">
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src="assets/images/projects/project-1.png"
                  alt=""
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a
                    className="text-decoration-projects"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/">
                    IGTB - CBX Contextual Payment
                  </a>
                </h3>
                <p className="mb-2">
                IGTB’s Contextual Banking Experience Platform (CBX) is a white label digital banking platform and product processors to manage corporate cash. It provides account, payment, liquidity, and trade services to the banks across the globe. Currently, we are providing payment services to the CIBC bank.
                ●	Working as a Sr. Frontend lead for a payment module.
                ●	Working extensively for the send money, RTP, and wire payment screens development using Angular 6.
                ●	Working on ANGULAR 6, HTML, SCSS, and Clarity Design Systems.

                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/">
                    <i className="fas fa-external-link-alt"></i><span className="p-text-color">
                      Find out more</span>
                  </a>
                </p>
              </div>
            </div>

            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/">
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src="assets/images/projects/project-2.png"
                  alt=""
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a
                  className="text-decoration-projects"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/">
                    Nexool - Learning platform
                  </a>
                </h3>
                <p className="mb-2">
                This is the digital reading platform for everyone but well suited for students. Worked on the web reader which is the main CPU of the application. Strong knowledge of EPUB JS 3 library. Implemented bookmark, table of content, progress bar, highlight, note, dictionary (Oxford) and Read aloud (amazon poly) functionalities.
                ●	Worked on an React 16, HTML5, SCSS, BOOTSTRAP.
                ●	Worked on project planning using JIRA management tool.
                ●	Worked on a version control system for commit GIT and JENKINS for builds deployment.

                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/">
                    <i className="fas fa-external-link-alt"></i><span className="p-text-color">
                      Find out more</span>
                  </a>
                </p>
              </div>
            </div>

            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/">
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src="assets/images/projects/project-3.png"
                  alt=""
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a
                  className="text-decoration-projects"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/">
                    Spraoi - Insurance Application
                  </a>
                </h3>
                <p className="mb-2">
                This is an insurance domain web application. It controls the customer’s data. Also, it’s related to high-cost insurance and its activities.
                ●	Worked on a React 16, HTML5, SCSS, and BOOTSTRAP.
                ●	Done code refactored i.e. rewritten code in ES6 features.
                ●	Worked on a version control system for commit GIT and JENKINS for builds deployment.

                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/">
                    <i className="fas fa-external-link-alt"></i><span className="p-text-color">
                      Find out more</span>
                  </a>
                </p>
              </div>
            </div>

            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/">
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src="assets/images/projects/project-4.png"
                  alt=""
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a
                  className="text-decoration-projects"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/">
                    GL&V: Pulp and Paper
                  </a>
                </h3>
                <p className="mb-2">
                It is a web application. It keeps data management about customers, distributors, and dealers for GL&V Inc.
                ●	Worked on an ANGULARJS framework.
                ●	Worked on web design using HTML, CSS, and BOOTSTRAP.

                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/"
                  >
                    <i className="fas fa-external-link-alt"></i><span className="p-text-color">
                      Find out more</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src="assets/images/projects/project-5.png"
                  alt=""
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a
                  className="text-decoration-projects"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/"
                  >
                   PHS - Practical Health System
                  </a>
                </h3>
                <p className="mb-2">
                  {" "}
                  It is a web application. It keeps all information about orphans and handicapped individuals. It includes their physical to mental health details. Diferent agencies controlling these contracts.
                  ●	Worked on JAVASCRIPT for maintenance and bug fnding.
                  ●	Worked on HTML, CSS, ANGULARJS, and JQUERY.

                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/"
                  >
                    <i className="fas fa-external-link-alt"></i><span className="p-text-color">
                      Find out more</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
