import { GreetTdd } from "./GreetTdd";
import { render, screen } from "@testing-library/react";

describe("GreetTdd", () => {
  it("GreetTdd renders correctly", () => {
    render(<GreetTdd />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  it("GreetTdd renders with a name", () => {
    render(<GreetTdd name="Bob" />);
    const textElement = screen.getByText(/Bob/i);
    expect(textElement).toBeInTheDocument();
  });
});
