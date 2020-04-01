import React from "react";

export default function CreateToDo(props) {
  return (
    <div>
      <form
        onSubmit={event => {
          props.handleSubmit(event);
        }}
      >
        <label>
          What needs to be done?
          <input
            type="text"
            value={props.toDo.toDoPhrase}
            onChange={event => {
              props.handleChange(event);
            }}
            placeholder="Add your todo here"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
