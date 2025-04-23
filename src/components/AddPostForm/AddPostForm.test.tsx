import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AddPostForm from "./AddPostForm";

describe("AddPostForm", () => {
  const mockHandleClose = vi.fn();
  const mockAddPost = vi.fn();

  beforeEach(() => {
    mockHandleClose.mockClear();
    mockAddPost.mockClear();
  });

  const setup = () =>
    render(
      <AddPostForm
        handleClose={mockHandleClose}
        addPost={mockAddPost}
        postIdx={99}
      />,
    );

  it("renders inputs and buttons", () => {
    setup();
    expect(screen.getByLabelText("Title of post:")).toBeInTheDocument();
    expect(screen.getByLabelText("Text:")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("shows validation errors if fields are empty and Add is clicked", () => {
    setup();
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getAllByText("Field is required")).toHaveLength(2);
    expect(mockAddPost).not.toHaveBeenCalled();
  });

  it("submits the form when all fields are filled", () => {
    setup();

    fireEvent.change(screen.getByLabelText("Title of post:"), {
      target: { value: "New Post" },
    });

    fireEvent.change(screen.getByLabelText("Text:"), {
      target: { value: "This is the body of the post" },
    });

    fireEvent.click(screen.getByText("Add"));

    expect(mockAddPost).toHaveBeenCalledWith({
      id: 100,
      userId: 1,
      title: "New Post",
      body: "This is the body of the post",
    });
  });

  it("calls handleClose when Cancel is clicked", () => {
    setup();
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
