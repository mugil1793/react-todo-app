import { useState } from "react";
import "./App.css";
import useTodo from "./hooks/useTodo";
import useLocalStorage from "./hooks/useLocalStorage";
import TodoList from "./components/TodoList";
import { LOCALSTORAGE_KEY_TODO } from "./constants";

function App() {
  const { getLocalStorage } = useLocalStorage();

  const [todoList, setTodoList] = useState(() => {
    const savedTodos = getLocalStorage(LOCALSTORAGE_KEY_TODO);
    return savedTodos.length > 0 ? savedTodos : [];
  });

  const { updateTodo, filteredTodoList, filterTodo } = useTodo({
    todoList,
    setTodoList,
  });

  return (
    <div className="App">
      <h1 className="header">Todo list</h1>
      <TodoList
        list={filteredTodoList}
        update={updateTodo}
        filter={filterTodo}
      />
    </div>
  );
}

export default App;
