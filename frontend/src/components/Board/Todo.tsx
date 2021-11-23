import React, { useEffect, useState } from "react";
import { Tasks } from "../TodoTask";
import { Container } from "./style";

const Todo = () => {
  return (
    <>
      <Container>
        <Tasks />
      </Container>
    </>
  );
};

export default Todo;
