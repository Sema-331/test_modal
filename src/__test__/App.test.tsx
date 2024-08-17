import { render, screen } from "@testing-library/react";
import App from "../App";

describe("User", () => {
  test("renders heading", async () => {
    render(<App />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
