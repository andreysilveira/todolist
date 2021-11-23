import React from "react";
import { Container } from "./style";

export const Footer = () => {
  return (
    <>
      <Container className="content has-text-centered">
        <p>
          <strong>Task List</strong> by{" "}
          <a href="https://github.com/andreysilveira">Andrey Silveira</a>.
        </p>
      </Container>
    </>
  );
};
