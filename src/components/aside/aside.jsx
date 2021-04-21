import React, { Component } from "react";
import BaiscInfo from './basicInfo/baiscInfo';
import Skills from './skills/skills';
import Testimonials from './testimonials/testimonials';
import Education from './education/education';
import Languages from './languages/languages';

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
          <Testimonials/>
          <Education/>
          <Languages/>
      </div>
    );
  }
}

export default Aside;
