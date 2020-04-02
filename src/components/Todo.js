import React from "react";

export default function Todo(props) {
  return (
    <div>
      <div
        style={{
          textDecoration: props.toDo.isDone && "line-through"
        }}
      >
        {props.toDo.toDoPhrase}
        <input
          name="isDone"
          type="checkbox"
          checked={props.toDo.isDone}
          onChange={props.handleCheckBoxChange}
        />
      </div>
    </div>
  );
}
