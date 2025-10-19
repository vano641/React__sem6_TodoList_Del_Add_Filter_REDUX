import React, {useContext} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toggleTodo} from "../actions/todoActions";
import {FilterContext} from "../contexts/FilterContext";
import withFilter from "../hoc/withFilter";

import { delTodo } from "../actions/todoActions";

const TodoList = () => {
    //получаем список задач из Redux хранилища
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const {filter} = useContext(FilterContext);

    // Применяем фильтр к задачам
    const filteredTodos = withFilter(todos, filter);

    const handleToggleTodo = (id) => {
        // Отправляем действие для изменения статуса задачи
        dispatch(toggleTodo(id));
    };

    const deleteTodo = (id) => {
        dispatch(delTodo(id));
    }

    return (
        <ul>
            {filteredTodos.map(todo => (
                <>
                    <li
                        key={todo.id}
                        style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                    >
                        <>
                            {todo.text}

                            <button  onClick={() => handleToggleTodo(todo.id)}>
                                Done
                            </button>

                            <button 
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                            
                        </>
                    </li>
                    
                </>
            ))}
        </ul>
    )
};

export default TodoList;