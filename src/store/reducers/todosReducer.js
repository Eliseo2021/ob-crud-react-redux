import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actions';

// Initial TodosState
// Initialy todos is empty
let initialState = [
    {
        id: 1,
        text: 'Tarea 1',
        completed: true
      },
      {
        id: 2,
        text: 'Tarea 2',
        completed: false
      },
      {
        id: 3,
        text: 'Tarea 3',
        completed: true
      }
];

export const todosReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )
            case DELETE_TODO:
                return state.filter((todo) => 
                todo.id !== action.payload.id)    
    
        default:
            return state;
    }
}