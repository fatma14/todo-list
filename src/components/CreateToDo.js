import React from "react";

import "./createToDo.css";

export default function CreateToDo(props) {
  return (
    <div className="inputContainer">
      <form
        id="formContainer"
        onSubmit={event => {
          props.handleSubmit(event);
        }}
      >
        <label>
          <input
            id="createToDo"
            type="text"
            value={props.toDo.toDoPhrase}
            onChange={event => {
              props.handleChange(event);
            }}
            placeholder="What needs to be done?"
          />
        </label>
      </form>
    </div>
  );
}
