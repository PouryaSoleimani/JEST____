import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "@/components/Article";

test("should renders a heading", () => {
  render(<Article />);
  // const myHeading = screen.getByRole("heading");
  // const myHeading = screen.getByText("heading");
  const myHeading = screen.getByTestId("heading");
  expect(myHeading).toBeInTheDocument();
});
