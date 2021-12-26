import React, { Component } from "react";

export class TodoForm extends Component {
  state = {
    input: "",
  };

  componentDidMount() {
    console.log('todoform mounted')
  }

  componentDidUpdate() {
    console.log('todoform updated')
  }

  componentWillUnmount() {
    console.log('todoform unmounted')
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    this.props.onAddTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
