import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Help from "../Help"

test("Should load Help component", () => {
    render(<Help />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})