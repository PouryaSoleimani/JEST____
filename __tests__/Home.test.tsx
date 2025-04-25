import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import '@testing-library/jest-dom';


test("SHOULD HAVE JEST TRAINING TEXT", () => {
    render(<Home />); // ARRANGE

    const myElement = screen.getByText("JEST TRAINING"); //ACT

    expect(myElement).toBeInTheDocument();
});