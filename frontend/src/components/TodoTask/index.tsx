import React, { useState } from "react";
import AddTask from "../AddTask";
import ModifyTask from "../ModifyTask";
import RemoveTask from "../RemoveTask";


export const Tasks = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  console.log(todos);
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          setTodos([...todos, value]);
        }}
      >
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit">adicionar</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
