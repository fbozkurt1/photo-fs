import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = props => {
  return (
    <ol class="breadcrumb">
      {props.paths.map(path => (
        <li className="breadcrumb-item">
          <Link to={path.to}>{path.label}</Link>
        </li>
      ))}
    </ol>
  );
};
export default Breadcrumb;
