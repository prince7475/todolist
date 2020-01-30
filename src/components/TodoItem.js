import React, { Component } from 'react'
import PropsTypes from 'prop-types'
export default class TodoItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <h3>{this.props.todo.title}</h3>
            </div>
        )
    }
}

const itemStyle = {
    backgroundColor : 'red'
}

TodoItem.propTypes = {
    todo: PropsTypes.object.isRequired
}

