import React, { Component } from "react";
import "./socialtags.scss";
import withTooltip from "./hoc/withTooltip";

class Socialtags extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { socialMediaTags, showTooltip, currentTag } = this.props;
    return (
      <React.Fragment>
        <ul className="social list-inline">
          {socialMediaTags.map((tag, index, arr) => (
            <li
              className={
                index === arr.length - 1
                  ? "list-inline-item last-item"
                  : "list-inline-item"
              }
              key={tag.icon}
            >
              <a href={tag.href}>
                <i className={tag.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        {showTooltip && (
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          >
            {currentTag}
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default withTooltip(Socialtags);
