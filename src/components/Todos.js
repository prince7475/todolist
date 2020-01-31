import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
 class Todos extends Component {

    render() {
        return (
            <div>
                {this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} checkBoxOnChange={(id) => this.props.checkBoxOnChange(id)}
                deleteItemById={(id) => this.props.deleteItemById(id)}
                /> )}
            </div>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos