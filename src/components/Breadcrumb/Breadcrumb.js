import React from "react";
import { Breadcrumb } from "rbx";
import { Link } from "react-router-dom";

function BreadcrumbNav(props) {
  return (
    <Breadcrumb separator="arrow">
      <Breadcrumb.Item>
        <Link to={`/`}>Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{props.text}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbNav;
