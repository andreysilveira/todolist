import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import { Tasks } from "../TodoTask";

const Todo = () => {
  return (
    <>
      <div>
        <Tasks />
      </div>
    </>
  );
};

export default Todo;
