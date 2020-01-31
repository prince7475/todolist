import Todos from "./components/Todos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import About from "./components/pages/About";
import axios from "axios";
class App extends Component {
  state = {
    todos: [],
    title: ""
  };

  componentDidMount() {
    console.log("component mounted");
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        console.log("response", response.data);
        this.setState({ todos: response.data });
      });
  }

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
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id != id;
        })
      });
    })

  };

  titleOnChange = event => {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  };

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: uuid.v4(),
        title,
        body: title
      })
      .then(response => {
        console.log('response', response)
        this.setState({
          ...this.state,
          todos: this.state.todos.concat(response.data)
        });
      });
  };

  render() {
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
