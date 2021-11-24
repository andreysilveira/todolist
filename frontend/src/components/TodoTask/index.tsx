import { Container } from "./style";
import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

export const Tasks = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [todosDone, setTodosDone] = useState<string[]>([]);


  function handleRemoveTask(){

  }

  console.log(todos);
  return (
    <Container className="box">
      <div className="ContainerHeader is-flex is-justify-content-space-between is-align-items-center">
        <div className="TitleHeader">
          <h1>To Do</h1>
        </div>
        <div className="ImgHeader is-flex is-justify-content-center is-align-content-center is-align-items-center">
          <img src="https://img.icons8.com/bubbles/50/000000/trash.png" />
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
            <h2>Teste</h2>
            <input
              className="input is-small"
              placeholder=""
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>
          {/* <button type="submit">adicionar</button> */}
        </form>
        <div className="ContainerItem">
          {todos.map((todo, index) => (
            <div
              className="divItem box is-flex is-justify-content-space-between is-align-content-center is-align-items-center"
              key={index}
            >
              {todo}{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  alert("A");
                }}
              >
                <IconContext.Provider value={{ color: "red" }}>
                  <FiTrash2 />
                </IconContext.Provider>
              </span>
            </div>
          ))}
        </div>
        <div className="Line"></div>
        <div></div>
      </div>
    </Container>
  );
};
