import React from "react";

import EditableToDo from "./EditableToDo";
import "./todoList.css";

export default function TodoList(props) {
  return (
    <div id="toDoElements">
      {props.toDos.map((toDo, index) => (
        <EditableToDo
          key={index}
          toDo={toDo}
          handleCheckBoxChange={() => props.handleCheckBoxChange(index)}
          handleNameChange={event => props.handleNameChange(event, index)}
        />
      ))}
    </div>
  );
}
