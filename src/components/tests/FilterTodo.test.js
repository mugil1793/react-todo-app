import { render, screen, fireEvent } from "@testing-library/react";
import FilterTodo from "../FilterTodo";

describe("FilterTodo", () => {
  const mockFilter = jest.fn();

  test("updates filter value", () => {
    render(<FilterTodo filter={mockFilter} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Completed" } });

    expect(mockFilter).toHaveBeenCalledWith("Completed");
  });
});
