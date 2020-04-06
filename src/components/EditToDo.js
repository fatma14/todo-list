import React from "react";

import "./editToDo.css";

export default function EditToDo(props) {
  return (
    <div>
      <form
        onSubmit={event => {
          props.handleSubmit(event);
        }}
      >
        <input
          className="editInput"
          type="text"
          value={props.toDo.toDoPhrase}
          onChange={event => {
            props.handleChange(event);
          }}
          placeholder="Add your todo here"
        />
      </form>
    </div>
  );
}
