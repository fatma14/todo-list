import React from "react";

import "./toDo.css";

export default function Todo(props) {
  return (
    <div className="toDoElement">
      <div
        className="toDo"
        style={{
          textDecoration: props.toDo.isDone && "line-through"
        }}
      >
        <div className="toDoText">{props.toDo.toDoPhrase}</div>

        <input
          className="checkBox"
          name="isDone"
          type="checkbox"
          checked={props.toDo.isDone}
          onChange={props.handleCheckBoxChange}
        />
      </div>
    </div>
  );
}
