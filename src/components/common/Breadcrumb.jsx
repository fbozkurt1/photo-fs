import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = props => {
  return (
    <ol className="breadcrumb">
      {props.paths.map(path => (
        <li className="breadcrumb-item">
          <Link to={path.to}>
            <span style={{ fontSize: "22px" }}>{path.label}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
};
export default Breadcrumb;
