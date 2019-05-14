import React from "react";
import { Column, Section, Loader } from "rbx";
import "./Loader.css";

function CustomLoader() {
  return (
    <Column.Group>
      <Column size="full">
        <Section>
          <Loader className="loader" />
        </Section>
      </Column>
    </Column.Group>
  );
}

export default CustomLoader;
