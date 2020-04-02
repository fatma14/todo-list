import React, { Component } from "react";

import CreateToDo from "./CreateToDo";
import TodoList from "./TodoList";
import ActionBar from "./ActionBar";

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
    const toDos = this.state.toDoArray.slice();
    toDos[index].isDone = !toDos[index].isDone;
    this.setState({
      toDoArray: toDos
    });
  }

  handleNameChange(event, index) {
    event.preventDefault();
    const toDos = this.state.toDoArray.slice();
    toDos[index].toDoPhrase = event.target.value;
    this.setState({
      toDoArray: toDos
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
    const filteredTodo = this.state.toDoArray.filter(toDo => {
      if (this.state.filterMode === ACTIVE_STATE) {
        return toDo.isDone === false;
      } else if (this.state.filterMode === COMPLETED_STATE) {
        return toDo.isDone === true;
      } else {
        return true;
      }
    });
    return (
      <div>
        <CreateToDo
          handleSubmit={(...arg) => this.handleSubmit(...arg)}
          handleChange={(...arg) => this.handleChange(...arg)}
          toDo={this.state.toDo}
        />
        <TodoList
          toDos={filteredTodo}
          handleCheckBoxChange={(...arg) => this.handleCheckBoxChange(...arg)}
          handleNameChange={(...arg) => this.handleNameChange(...arg)}
        />
        <ActionBar
          toDoArray={this.state.toDoArray}
          showActiveElements={(...arg) => this.showActiveElements(...arg)}
          showCompletedElements={(...arg) => this.showCompletedElements(...arg)}
          showAllElements={(...arg) => this.showAllElements(...arg)}
          removeCompletedTasks={(...arg) => this.removeCompletedTasks(...arg)}
        />
      </div>
    );
  }
}
