import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../TodoForm";

describe("TodoForm", () => {
  const mockUpdate = jest.fn();

  beforeEach(() => {
    mockUpdate.mockClear();
  });

  test("submits valid todo", () => {
    render(<TodoForm update={mockUpdate} />);

    const input = screen.getByPlaceholderText("Enter a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(mockUpdate).toHaveBeenCalledWith(
      { task: "New Todo", isCompleted: false },
      "add"
    );
  });

  test("does not submit empty todo", () => {
    render(<TodoForm update={mockUpdate} />);
    fireEvent.click(screen.getByText("Add Task"));
    expect(mockUpdate).not.toHaveBeenCalled();
  });
});
