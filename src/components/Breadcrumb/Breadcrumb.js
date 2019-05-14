import React from "react";
import { Breadcrumb, Notification } from "rbx";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function BreadcrumbNav(props) {
  return (
    <Notification className="breadcrumb-nav">
      <Breadcrumb separator="arrow" size="medium">
        <Breadcrumb.Item>
          <Link to={`/`}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{props.text}</Breadcrumb.Item>
      </Breadcrumb>
    </Notification>
  );
}

export default BreadcrumbNav;
