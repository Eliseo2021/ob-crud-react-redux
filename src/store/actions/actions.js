// Incremental ID for Todos
let nextTodoID = 0;

// Action Types:
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const DELETE_TODO = 'DELETE_TODO';


/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}



/**
 * 
 * @param {number} id 
 * @returns action DELETE_TODO
 */
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}



