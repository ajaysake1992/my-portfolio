import React from "react";
import "./main.scss";
import About from "./about/about";
import Projects from "./projects/projects";
import Experience from "./experience/experience";
import Aside from "../aside/aside";
import Errorboundary from "./../errorhandling/global/errorboundary";

function Main() {
  return (
    <div className="container sections-wrapper">
      <div className="row">
        <div className="primary col-lg-8 col-12">
          <Errorboundary>
            <About heading="About Me" />
          </Errorboundary>
          <Errorboundary>
            <Projects />
          </Errorboundary>
          <Errorboundary>
            <Experience />
          </Errorboundary>
        </div>
        <Errorboundary>
          <Aside />
        </Errorboundary>
      </div>
    </div>
  );
}

export default Main;
