// Хранилище - это лбъект, который содержит состояние приложения
// и предоставляет методы для его изменения

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todosReducer";

// Настройка Redux хранилища с использованием todosReducer
// исправляем значение todos с помощью редюсеров
const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export default store;