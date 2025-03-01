import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../TodoItem";

describe("TodoItem", () => {
  const mockTodo = { task: "Test Todo", isCompleted: false };
  const mockUpdate = jest.fn();

  test("renders todo item", () => {
    render(<TodoItem todo={mockTodo} updateTodo={mockUpdate} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("toggles completion status", () => {
    render(<TodoItem todo={mockTodo} updateTodo={mockUpdate} />);
    fireEvent.click(screen.getByText("Test Todo"));
    expect(mockUpdate).toHaveBeenCalledWith(mockTodo, "completed");
  });

  test("triggers delete action", () => {
    render(<TodoItem todo={mockTodo} updateTodo={mockUpdate} />);
    fireEvent.click(screen.getByText("Delete"));
    expect(mockUpdate).toHaveBeenCalledWith(mockTodo, "delete");
  });
});
