import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, onDeleteTodo, completed, text, id }) => {
    return (
        <li onClick={onClick} 
        style={
            {
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white'  
            } 
        }>
            {id} - {text}
            <button onClick={onDeleteTodo} style={{ background: 'tomato', color: 'white' }}>Delete</button>
        </li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;
