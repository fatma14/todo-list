import React from "react";

import ToDo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      <form>
        {props.toDos.map((toDo, index) => (
          <ToDo
            key={index}
            toDo={toDo}
            handleCheckBoxChange={() => props.handleCheckBoxChange(index)}
          />
        ))}
      </form>
    </div>
  );
}
