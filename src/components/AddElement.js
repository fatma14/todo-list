import React, { Component } from "react";

export default class AddElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoPhrase: ""
    };
  }

  handleChange(event) {
    console.log(this);
    this.setState({
      toDoPhrase: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <label>
            What needs to be done?
            <input
              type="text"
              value={this.state.toDoPhrase}
              onChange={event => {
                this.handleChange(event);
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
