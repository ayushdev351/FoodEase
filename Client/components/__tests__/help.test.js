import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Help from "../Help"

describe("Help page test cases", () => {
    test("Should load Help component", () => {
        render(<Help />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("Should Load button inside Help component", () => {
        render(<Help/>);
    
        const button = screen.getByRole("button");
    
        // Actual virtual dom node
        // console.log(button)
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should contain text 'you' inside Help Component", () => {
        render(<Help/>);
    
        // Element with text -> 'you'
        const text = screen.getByText("you");
    
        expect(text).toBeInTheDocument();
    })
    
    test("Should contain 2 input boxes in Help component", () => {
        render(<Help/>);
    
        const inputs = screen.getAllByRole('textbox');
    
        // console.log(inputs)
    
        expect(inputs.length).toBe(2);
    })
})