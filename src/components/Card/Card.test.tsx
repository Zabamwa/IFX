import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";
import { describe, it, expect } from "vitest";

const mockUser = {
  id: 1,
  name: "John Doe",
  username: "johnd",
  email: "john@example.com",
  phone: "123-456",
  website: "johndoe.com",
  company: {
    name: "JD Inc.",
    catchPhrase: "Exceed expectations",
    bs: "business solutions",
  },
  address: {
    city: "New York",
    street: "Main",
    suite: "Apt. 1",
    zipcode: "12345",
    geo: { lat: 0, lng: 0 },
  },
};

describe("Card component", () => {
  it("renders title, body and user", () => {
    render(
      <Card
        title="Post Title"
        body="Post Description"
        user={mockUser}
        theme="light"
      />,
    );

    expect(screen.getByText("Post Title")).toBeInTheDocument();
    expect(screen.getByText("Post Description")).toBeInTheDocument();
    expect(screen.getByText(/johnd - john@example.com/i)).toBeInTheDocument();
  });

  it("shows and hides detail section", () => {
    render(<Card title="Title" body="Body" user={mockUser} theme="light" />);
    const toggleButton = screen.getByText(/More details/i);
    fireEvent.click(toggleButton);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByTestId("detail-city")).toHaveTextContent(
      "City: New York",
    );

    fireEvent.click(screen.getByText(/Less details/i));
  });
});
