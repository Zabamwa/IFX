import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorAlert from "./ErrorAlert";

describe("ErrorAlert", () => {
  it("renders the message", () => {
    render(<ErrorAlert message="Something went wrong" />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders with any message passed as prop", () => {
    const message = "Network error occurred";
    render(<ErrorAlert message={message} />);
    expect(screen.getByText(message)).toBeVisible();
  });
});
