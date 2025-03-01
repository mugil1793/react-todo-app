import { useState } from "react";
import {
  UPDATE_FUNCTION_PARAMETERS,
  TODO_INPUT_PLACEHOLDER,
} from "../constants";

const TodoForm = ({ update }) => {
  const [todo, setTodo] = useState("");
  const handleTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      const currTodo = { task: todo, isCompleted: false };
      update(currTodo, UPDATE_FUNCTION_PARAMETERS.add);
      setTodo("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder={TODO_INPUT_PLACEHOLDER}
        name="task"
        className="todoinput"
        value={todo}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleTodo(e);
        }}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          handleTodo(e);
        }}
        className="addbtn"
      >
        Add Todo
      </button>
    </div>
  );
};
export default TodoForm;
