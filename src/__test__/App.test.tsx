import { render, screen } from "@testing-library/react";
import App from "../App";

describe("User", () => {
  test("renders heading", async () => {
    render(<App />);
    expect(screen.getByText(/outlined/i)).toBeInTheDocument();
  });
  test("open modal", () => {
    render(<App />);
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
});
