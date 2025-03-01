import { useEffect, useState, useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
import {
  LOCALSTORAGE_KEY_TODO,
  UPDATE_FUNCTION_PARAMETERS,
  FILTER_OPTIONS,
} from "../constants";

const useTodo = ({ todoList, setTodoList }) => {
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [filterValue, setFilterValue] = useState(FILTER_OPTIONS[0].value);
  const { setlocalStorage } = useLocalStorage();

  useEffect(() => {
    setFilteredTodoList(filterTodo(filterValue));
  }, [todoList, filterValue]);

  useEffect(() => {
    setlocalStorage(LOCALSTORAGE_KEY_TODO, todoList);
  }, [todoList]);

  const updateTodo = (todo, action) => {
    setTodoList((prev) => {
      let updatedList;
      switch (action) {
        case UPDATE_FUNCTION_PARAMETERS.add:
          updatedList = prev.some((item) => item.task === todo.task)
            ? prev
            : [...prev, todo];
          updatedList.sort((a, b) => a.isCompleted - b.isCompleted);
          break;
        case UPDATE_FUNCTION_PARAMETERS.delete:
          updatedList = prev.filter((item) => item.task !== todo.task);
          break;
        case UPDATE_FUNCTION_PARAMETERS.complete:
          updatedList = prev
            .map((item) =>
              item.task === todo.task
                ? { ...item, isCompleted: !item.isCompleted }
                : item
            )
            .sort((a, b) => a.isCompleted - b.isCompleted);
          break;
        default:
          return prev;
      }
      return updatedList;
    });
  };

  const filterTodo = useCallback(
    (filter) => {
      setFilterValue(filter);
      if (filter === "completed")
        return todoList.filter((todo) => todo.isCompleted);
      if (filter === "active")
        return todoList.filter((todo) => !todo.isCompleted);
      return todoList;
    },
    [todoList]
  );

  return { updateTodo, filteredTodoList, filterTodo };
};

export default useTodo;
