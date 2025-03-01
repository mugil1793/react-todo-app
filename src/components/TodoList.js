import TodoItem from "./TodoItem";
import FilterTodo from "./FilterTodo";
import TodoForm from "./TodoForm";
import { EMPTY_TODO_LIST_PLACEHOLDER } from "../constants";
const TodoList = ({ list = [], update, filter }) => {
  return (
    <>
      <div>
        <TodoForm update={update} />
      </div>
      {/* {list.length > 0 && ( */}
      <div className="filter-container">
        <FilterTodo filter={filter} />
      </div>
      {/* )} */}
      {list.length > 0 ? (
        <div className="task-list">
          {list.map((todo, index) => {
            return <TodoItem todo={todo} key={index} updateTodo={update} />;
          })}
        </div>
      ) : (
        <div className="defalut-container">
          <span className="empty-list">{EMPTY_TODO_LIST_PLACEHOLDER}</span>
        </div>
      )}
    </>
  );
};
export default TodoList;
