import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList", () => {
  test("displays empty message when no todos", () => {
    render(<TodoList list={[]} />);
    expect(screen.getByText(/The Todo list is empty/i)).toBeInTheDocument();
  });

  test("renders todos when list exists", () => {
    const mockTodos = [{ task: "Test Todo", isCompleted: false }];
    render(<TodoList list={mockTodos} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });
});
