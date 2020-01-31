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
    todos: PropTypes.array.isRequired,
    checkBoxOnChange: PropTypes.func.isRequired,
    deleteItemById: PropTypes.func.isRequired
}

export default Todos