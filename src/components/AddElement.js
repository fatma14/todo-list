import React, { Component } from "react";

import CreateToDo from "./CreateToDo";

const ACTIVE_STATE = "ACTIVE";
const COMPLETED_STATE = "COMPLETED";
const ALL_STATE = "ALL";

export default class AddElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: {
        toDoPhrase: "",
        isDone: false
      },
      toDoArray: [],
      filterMode: "ALL"
    };
  }

  handleChange(event) {
    this.setState({
      toDo: {
        toDoPhrase: event.target.value,
        isDone: false
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.toDo],
      toDo: {
        toDoPhrase: "",
        isDone: false
      }
    });
  }

  handleCheckBoxChange(index) {
    console.log("handleCheckBoxChange", index);
    const toDo = this.state.toDoArray.slice();
    toDo[index].isDone = !toDo[index].isDone;
    this.setState({
      toDoArray: toDo
    });
  }

  showActiveElements() {
    this.setState({
      filterMode: ACTIVE_STATE
    });
  }

  showCompletedElements() {
    this.setState({
      filterMode: COMPLETED_STATE
    });
  }

  showAllElements() {
    this.setState({
      filterMode: ALL_STATE
    });
  }

  removeCompletedTasks() {
    const activeTasksArray = this.state.toDoArray
      .slice()
      .filter(toDo => toDo.isDone === false);
    console.log("activeTasksArray", activeTasksArray);
    this.setState({
      toDoArray: activeTasksArray
    });
  }

  render() {
    return (
      <div>
        <CreateToDo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          toDo={this.state.toDo}
        />

        <form>
          {this.state.toDoArray
            .filter(toDo => {
              if (this.state.filterMode === ACTIVE_STATE) {
                return toDo.isDone === false;
              } else if (this.state.filterMode === COMPLETED_STATE) {
                return toDo.isDone === true;
              } else {
                return true;
              }
            })
            .map((toDo, index) => (
              <div className="task-todo">
                <label
                  style={{
                    textDecoration: toDo.isDone && "line-through"
                  }}
                  key={index}
                >
                  {toDo.toDoPhrase}
                  <input
                    name="isDone"
                    type="checkbox"
                    checked={toDo.isDone}
                    onChange={event => {
                      console.log(event);
                      this.handleCheckBoxChange(index);
                    }}
                  />
                </label>
              </div>
            ))}
        </form>
        <div>
          {this.state.toDoArray.length > 0 && (
            <div>
              <div>
                {
                  this.state.toDoArray.filter(toDo => toDo.isDone === false)
                    .length
                }
                items left
              </div>
              <button
                onClick={() => {
                  this.showActiveElements();
                }}
              >
                Active
              </button>
              <button
                onClick={() => {
                  this.showCompletedElements();
                }}
              >
                Completed
              </button>
              <button
                onClick={() => {
                  this.showAllElements();
                }}
              >
                All
              </button>
              <button
                onClick={() => {
                  this.removeCompletedTasks();
                }}
              >
                Clear completed tasks
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
