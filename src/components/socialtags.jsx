import React from "react";
import "./socialtags.scss";
import withTooltip from "./hoc/withTooltip";

function Socialtags(props) {

  const { socialMediaTags } = props;

  return (
    <React.Fragment>
      <ul className="social list-inline">
        {socialMediaTags?.map((tag, index, arr) => (
          <li
            className={
              index === arr.length - 1
                ? "list-inline-item last-item"
                : "list-inline-item"
            }
            key={tag.icon}
          >
            <a href={tag.href} data-toggle="tooltip" title={tag.name}>
              <i className={tag.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}


export default withTooltip(Socialtags);

