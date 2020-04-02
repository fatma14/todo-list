import React from "react";

export default function ActionBar(props) {
  let activeItemsNumber = props.toDoArray.filter(toDo => toDo.isDone === false)
    .length;
  return (
    <div>
      {props.toDoArray.length > 0 && (
        <div>
          {activeItemsNumber === 1 ? (
            <div>1 item left</div>
          ) : (
            <div> {activeItemsNumber} items left </div>
          )}
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
