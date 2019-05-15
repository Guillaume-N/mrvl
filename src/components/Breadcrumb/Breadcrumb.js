import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb as BulmaBreadcrumb, Notification, Column } from "rbx";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb(props) {
  return (
    <Column size={props.size}>
      <Notification className="breadcrumb-nav">
        <BulmaBreadcrumb separator="arrow" size="medium">
          <BulmaBreadcrumb.Item as="span">
            <Link to={`/`}>Home</Link>
          </BulmaBreadcrumb.Item>
          <BulmaBreadcrumb.Item active>{props.text}</BulmaBreadcrumb.Item>
        </BulmaBreadcrumb>
      </Notification>
    </Column>
  );
}
Breadcrumb.propTypes = {
  size: PropTypes.number
};

Breadcrumb.defaultProps = {
  size: 12
};

export default Breadcrumb;
