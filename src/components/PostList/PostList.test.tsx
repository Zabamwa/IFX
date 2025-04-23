import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PostList from "./PostList";
import { IPosts } from "../../types/post";
import { IUser } from "../../types/user";

vi.mock("react-redux", () => ({
  useSelector: () => "light",
}));

const mockUser: IUser = {
  id: 1,
  name: "Jane Doe",
  username: "jdoe",
  email: "jane@example.com",
  phone: "123-456-789",
  website: "jane.com",
  address: {
    city: "City",
    street: "Main St",
    suite: "Apt 1",
    zipcode: "12345",
    geo: { lat: 0, lng: 0 },
  },
  company: {
    name: "JD LLC",
    catchPhrase: "Get things done",
    bs: "biz",
  },
};

describe("PostList component", () => {
  it('renders "No posts available" when list is empty', () => {
    render(<PostList posts={[]} userMap={{}} />);
    expect(screen.getByText("No posts available")).toBeInTheDocument();
  });

  it("renders post cards when posts are provided", () => {
    const mockPosts: IPosts[] = [
      { id: 1, title: "Post A", body: "Body A", userId: 1 },
      { id: 2, title: "Post B", body: "Body B", userId: 1 },
    ];

    render(<PostList posts={mockPosts} userMap={{ 1: mockUser }} />);
    expect(screen.getByText("Post A")).toBeInTheDocument();
    expect(screen.getByText("Post B")).toBeInTheDocument();
    expect(screen.getAllByText("jdoe - jane@example.com")).toHaveLength(2);
  });
});
