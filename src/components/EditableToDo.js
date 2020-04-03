import React from "react";

import Todo from "./Todo";
import EditToDo from "./EditToDo";
import "./editableToDo.css";

export default function editableToDo(props) {
  const [editibleMode, setEditableMode] = React.useState(false);
  return (
    <div className="editableToDo" onDoubleClick={() => setEditableMode(true)}>
      {!editibleMode ? (
        <Todo
          toDo={props.toDo}
          handleCheckBoxChange={props.handleCheckBoxChange}
        />
      ) : (
        <EditToDo
          toDo={props.toDo}
          handleChange={props.handleNameChange}
          handleSubmit={() => {
            setEditableMode(false);
          }}
        />
      )}
    </div>
  );
}
