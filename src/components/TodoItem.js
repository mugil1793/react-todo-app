import { UPDATE_FUNCTION_PARAMETERS } from "../constants";
const TodoItem = ({ todo, updateTodo }) => {
  const deleteCall = () => {
    updateTodo(todo, UPDATE_FUNCTION_PARAMETERS.delete);
  };
  const updateTask = () => {
    updateTodo(todo, UPDATE_FUNCTION_PARAMETERS.complete);
  };

  return (
    <li className={todo.isCompleted ? "task completed" : "task"}>
      <span className="taskname" onClick={updateTask}>
        {todo.task}
      </span>
      <button onClick={deleteCall}>Delete</button>
    </li>
  );
};
export default TodoItem;
