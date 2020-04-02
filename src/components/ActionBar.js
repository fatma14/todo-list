import React from "react";

export default function ActionBar(props) {
  return (
    <div>
      {props.toDoArray.length > 0 && (
        <div>
          <div>
            {props.toDoArray.filter(toDo => toDo.isDone === false).length}
            items left
          </div>
          <button
            onClick={() => {
              props.showActiveElements();
            }}
          >
            Active
          </button>
          <button
            onClick={() => {
              props.showCompletedElements();
            }}
          >
            Completed
          </button>
          <button
            onClick={() => {
              props.showAllElements();
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              props.removeCompletedTasks();
            }}
          >
            Clear completed tasks
          </button>
        </div>
      )}
    </div>
  );
}
