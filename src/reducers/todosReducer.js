import { ADD_TODO, TOGGLE_TODO, DEL_TODO } from "../actions/todoActions";

const initialState = [];

// Редьюсер для обработки действий с задачами
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            // уникальное значение date.now это лайвхак для создания id (чтобы не рандомить цифры или значения)
            return [...state, {id: Date.now(), text: action.payload.text, completed: false}];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
            );
        case DEL_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    };
};

export default todosReducer;