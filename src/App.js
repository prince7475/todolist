import Todos from "./components/Todos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import About from "./components/pages/About";
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Make dinner",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "meeting with boss",
        completed: false
      }
    ],
    title: ""
  };

  checkBoxOnChange = id => {
    const currentTodo = this.state.todos;
    const newTodoList = currentTodo.map(todo => {
      if (todo.id === id) {
        return {
          id: id,
          title: todo.title,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodoList });
  };

  deleteItemById = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id != id;
      })
    });
  };

  titleOnChange = event => {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  };

  addTodo = title => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: uuid.v4(), title, completed: false })
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route
            exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    checkBoxOnChange={this.checkBoxOnChange}
                    deleteItemById={this.deleteItemById}
                  />
                </React.Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
