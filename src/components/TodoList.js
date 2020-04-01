import React from "react";

export default function TodoList(props) {
  return (
    <div>
      <form>
        {props.toDos.map((toDo, index) => (
          <div className="task-todo" key={index}>
            <label
              style={{
                textDecoration: toDo.isDone && "line-through"
              }}
            >
              {toDo.toDoPhrase}
              <input
                name="isDone"
                type="checkbox"
                checked={toDo.isDone}
                onChange={event => {
                  console.log(event);
                  props.handleCheckBoxChange(index);
                }}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
