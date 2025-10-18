import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../actions/todoActions";

const AddTodo = () => {
    // Локальное состояние для текста новой задачи
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    
    // Конструкция const dispatch = useDispatch() в React с библиотекой Redux возвращает ссылку на функцию dispatch из хранилища Redux. Это позволяет функциональным компонентам отправлять действия в хранилище, что обновляет состояние
    // Хук возвращает функцию store.dispatch. Компонент может использовать эту функцию для отправки действий, например, передать объект action

    const handleAddTodo = () => {
        // отправляем действие для добавления новой задачи
        dispatch(addTodo(text));
        setText("");
    };

    return (
        <div>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Добавить задачу</button>
        </div>
    )
};

export default AddTodo;