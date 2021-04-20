import React, { Component } from "react";
import BaiscInfo from './baiscInfo';
import Skills from './skills';

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="secondary col-lg-4 col-12">
          <BaiscInfo/>
          <Skills/>
      </div>
    );
  }
}

export default Aside;
