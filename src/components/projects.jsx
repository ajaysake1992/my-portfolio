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
                  Launch - The perfect Bootstrap template for SaaS products
                </a>
              </h3>

              <div className="desc text-left">
                <p>
                  You can promote your main project here. Suspendisse in tellus
                  dolor. Vivamus a tortor eu turpis pharetra consequat quis non
                  metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris
                  dui tincidunt enim, eget iaculis ante dolor non turpis. Ut
                  enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam.
                </p>
              </div>
              <a
                className="btn btn-cta-secondary"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/">
                <i className="fas fa-thumbs-up"></i> Back my project
              </a>
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
                  You can put one of your secondary projects here. Suspendisse
                  in tellus dolor. Vivamus a tortor eu turpis pharetra consequat
                  quis non metus. Aliquam aliquam, orci eu suscipit
                  pellentesque, mauris dui tincidunt enim, eget iaculis ante
                  dolor non turpis.
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
                  You can put one of your secondary projects here. Suspendisse
                  in tellus dolor. Vivamus a tortor eu turpis pharetra consequat
                  quis non metus. Aliquam aliquam, orci eu suscipit
                  pellentesque, mauris dui tincidunt enim, eget iaculis ante
                  dolor non turpis.
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
                    Spraio - Insurance portal
                  </a>
                </h3>
                <p className="mb-2">
                  You can put one of your secondary projects here. Suspendisse
                  in tellus dolor. Vivamus a tortor eu turpis pharetra consequat
                  quis non metus. Aliquam aliquam, orci eu suscipit
                  pellentesque, mauris dui tincidunt enim, eget iaculis ante
                  dolor non turpis.
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
                    Pulp and Paper
                  </a>
                </h3>
                <p className="mb-2">
                  You can put one of your secondary projects here. Suspendisse
                  in tellus dolor. Vivamus a tortor eu turpis pharetra consequat
                  quis non metus.
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
                  You can put one of your secondary projects here. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi.
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
