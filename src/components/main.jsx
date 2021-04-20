import React, { Component } from 'react';
import './main.scss';
import About from './about';
import Projects from './projects';
import Experience from './experience';
import Aside from './aside';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div className="container sections-wrapper">
            <div className="row">
              <div className="primary col-lg-8 col-12">
               <About heading="About Me"/>
               <Projects/>
               <Experience/>
              </div>
              <Aside/>
            </div>
          </div>
        );
    }
}

export default Main;