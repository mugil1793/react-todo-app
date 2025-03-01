import {
  render,
  screen,
  fireEvent,
  renderHook,
  act,
} from "@testing-library/react";
import App from "./App";

describe("App Integration", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("loads todos from localStorage on mount", () => {
    const mockTodos = [{ task: "Test Todo", isCompleted: false }];
    localStorage.setItem("todolist", JSON.stringify(mockTodos));

    render(<App />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("adds new todo and persists to localStorage", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Enter a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(await screen.findByText("New Todo")).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem("todolist"))).toHaveLength(1);
  });
});
