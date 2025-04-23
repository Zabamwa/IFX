import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ThemeToggle from "./ThemeToggle";

const toggleMock = vi.fn();
vi.mock("../../hooks/useTheme", () => ({
  useTheme: () => ({
    theme: "light",
    toggle: toggleMock,
  }),
}));

describe("ThemeToggle component", () => {
  beforeEach(() => {
    toggleMock.mockClear();
  });

  it("renders correct label for light theme", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveTextContent(
      "Change to dark theme",
    );
  });

  it("calls toggle when button is clicked", () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("button"));
    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
