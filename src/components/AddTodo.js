import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class AddTodo extends Component {
    state = {
        title : ""
    }
    

    titleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    titleOnSubmit = (event) => {
        event.preventDefault()
       this.props.addTodo(this.state.title)
       this.setState({[event.target.name] : ""})
    }
    render() {
        return (
            <form action="" style={{display: 'flex'}}>
                <input type="text"
                name="title"
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Todo ..."
                onChange={this.titleOnChange}
                value={this.state.title}
            
                />

                <input 
                type="submit" 
                value="Submit"
                name='title'
                className='btn'
                style={{flex: '1'}}
                onClick={this.titleOnSubmit}
                />
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}