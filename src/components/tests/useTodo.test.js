import { renderHook, act } from "@testing-library/react";
import useTodo from "../../hooks/useTodo";

describe("useTodo", () => {
  test("adds todo", () => {
    const setTodoListMock = jest.fn();
    const { result } = renderHook(() =>
      useTodo({
        todoList: [],
        setTodoList: setTodoListMock,
      })
    );

    act(() => {
      result.current.updateTodo({ task: "New Todo" }, "add");
    });

    expect(setTodoListMock).toHaveBeenCalledWith(
      expect.arrayContaining([{ task: "New Todo", isCompleted: false }])
    );
  });

  test("filters todos", () => {
    const todos = [
      { task: "Todo 1", isCompleted: false },
      { task: "Todo 2", isCompleted: true },
    ];

    const { result } = renderHook(() =>
      useTodo({
        todoList: todos,
        setTodoList: jest.fn(),
      })
    );

    act(() => {
      result.current.filterTodo("Completed");
    });

    expect(result.current.filteredTodoList).toEqual(
      expect.arrayContaining([{ task: "Todo 2", isCompleted: true }])
    );
  });
});
