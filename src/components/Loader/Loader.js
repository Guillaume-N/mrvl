import React from "react";
import { Column, Section, Loader } from "rbx";

function CustomLoader() {
  return (
    <Column.Group>
      <Column size="full">
        <Section>
          <Loader style={{ fontSize: "100px", margin: "0 auto" }} />
        </Section>
      </Column>
    </Column.Group>
  );
}

export default CustomLoader;
