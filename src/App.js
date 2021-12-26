import { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Todo from "./components/Todo";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    id: 0,
    todos: [],
    // comp: "todos",
  };

  onAddTodo = (todoTitle) => {
    this.setState({
      todos: [...this.state.todos, { title: todoTitle, id: this.state.id++ }],
    });
  };

  // handleCompChange = (comp) => {
  //   this.setState({ comp });
  // };

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Link to="/todos"><button>Todos</button></Link>
        <Link to="/todoform"><button>TodoForm</button></Link>

        <Switch>
        <Route
          path="/todos"
          render = {(renderProps) => <Todos todos={this.state.todos} {...renderProps} />}
        />
        <Route
          path="/todoform"
          render = {(renderProps) => <TodoForm onAddTodo={this.onAddTodo} {...renderProps} />}
        />
        <Route
          path="/todo/:todoId/:todoName"
          component={Todo}
        />
        <Route
         component={NotFound}
        />
        </Switch>
        {/* {this.state.comp === "todos" && <Todos todos={this.state.todos} />}
        {this.state.comp === "todoform" && (
          <TodoForm onAddTodo={this.onAddTodo} />
        )} */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
