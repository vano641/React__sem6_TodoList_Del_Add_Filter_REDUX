// Константы для типов действий
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DEL_TODO = "DEL_TODO";

// Создание задачи
export const addTodo = (text) => ({
    type: ADD_TODO, // тип действия
    payload: {text}, // Полезная нагрузка действия
});

// Изменение статуса задачи (выполнено/не выполнено)
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {id},
});
// Удаление
export const delTodo = (id) => ({
    type: DEL_TODO,
    payload: {id},
});