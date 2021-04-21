import React, { Component } from "react";
import './footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <small className="copyright">
            Designed with <i className="fas fa-heart"></i> by{" "}
            <a href="https://themes.3rdwavemedia.com">
              Ajinath Sake
            </a>{" "}
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
