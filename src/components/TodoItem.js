import React, { Component } from 'react'
import PropsTypes from 'prop-types'
export default class TodoItem extends Component {


    getStyle = () => {
            return {
                background: '#f4f4f4',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
    }

    render() {

        return (

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={() => this.props.checkBoxOnChange(this.props.todo.id)}/> {' '}
                    {this.props.todo.title}
                    <span>{' '}<button onClick={()=> this.props.deleteItemById(this.props.todo.id)}>Delete</button></span>
                    </p>

                    
            </div>
        )
    }
}


TodoItem.propTypes = {
    todo: PropsTypes.object.isRequired,

}

