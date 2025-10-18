import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import {FilterProvider} from "./contexts/FilterContext";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <FilterProvider>
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </FilterProvider>
    </Provider>
      
    
  );
}

export default App;
