
import Todos from './components/Todos'


import React, { Component } from 'react'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: true
      },
      {
        id: 3,
        title: 'meeting with boss',
        completed: true
      }

    ]

  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="">
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}


export default App;
