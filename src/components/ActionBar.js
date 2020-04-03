import React from "react";

import "./actionBar.css";

export default function ActionBar(props) {
  let activeItemsNumber = props.toDoArray.filter(toDo => toDo.isDone === false)
    .length;
  return (
    <div>
      {props.toDoArray.length > 0 && (
        <div className="footer">
          <div className="actionBar">
            {activeItemsNumber === 1 ? (
              <button className="counter">1 item left</button>
            ) : (
              <button className="counter">
                {" "}
                {activeItemsNumber} items left{" "}
              </button>
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
          <div className="instruction">Double click to edit a toDo</div>
        </div>
      )}
    </div>
  );
}
