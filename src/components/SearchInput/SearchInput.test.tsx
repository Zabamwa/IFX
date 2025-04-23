import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput component", () => {
  it("renders the input with the correct value", () => {
    render(<SearchInput value="example" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("example");
  });

  it("calls onChange when typing in input", () => {
    const handleChange = vi.fn();
    render(<SearchInput value="" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "hello" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders the label linked to input", () => {
    render(<SearchInput value="" onChange={() => {}} />);
    const label = screen.getByLabelText("Search");
    expect(label).toBeInTheDocument();
  });
});
