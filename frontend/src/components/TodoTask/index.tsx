import { Container } from "./style";
import React, { useState } from "react";

export const Tasks = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  console.log(todos);
  return (
    <Container className="box">
      <div className="ContainerHeader">
        <div className="TitleHeader">
          <h1>To Do</h1>
        </div>
        <div className="ImgHeader">
          
        </div>
      </div>

      <div className="ContainerMain">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([...todos, value]);
        }}
      > 
        <label className="label">
          <h2>
          Teste
          </h2>
        <input
          className="input is-small"
          placeholder=""
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        </label>
        <button type="submit">adicionar</button>
      </form>
      <div className="Line"></div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
      </div>
    </Container>
  );
};
