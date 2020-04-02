import React from "react";

export default function EditToDo(props) {
  return (
    <div>
      <form
        onSubmit={event => {
          props.handleSubmit(event);
        }}
      >
        <input
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
