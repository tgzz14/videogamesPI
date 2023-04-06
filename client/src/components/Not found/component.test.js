import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound.jsx";

describe("Register component", () => {
  test("should render Register component correctly", () => {
    render(<NotFound />);
    const element = screen.getByRole("heading")
    expect(element).toBeInTheDocument();

  });
});