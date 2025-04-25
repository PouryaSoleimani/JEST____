import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import '@testing-library/jest-dom';


test("SHOULD HAVE THE WORD JEST IN THE DOM", () => {

    render(<Home />);
    // const myElement = screen.getByText("JEST TRAINING COURSE");
    const myElement = screen.getByRole("heading", {
        name: "JEST TRAINING COURSE"
    });
    expect(myElement).toBeInTheDocument();


});    