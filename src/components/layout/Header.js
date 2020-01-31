import React from 'react'

export default function Header() {
    return (
        <div style={headerStyle}>
            <h2>Todo List </h2>
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
