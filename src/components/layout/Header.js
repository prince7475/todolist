import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div style={headerStyle}>
            <h2>Todo List </h2>
            <Link style={{color: '#fff'}} to='/'>Home </Link>
            <Link style={{color: '#fff'}} to='/about'>About</Link>
            
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
