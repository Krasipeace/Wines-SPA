import { render } from "@testing-library/react";
import Footer from "./Footer";
import '@testing-library/jest-dom';

test("Renders Footer", () => {
    render(<Footer />);

    const footer = document.querySelector("footer");
    
    expect(footer).toBeInTheDocument();
});

test("Renders current year", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const footer = document.querySelector("footer p");

    expect(footer).toHaveTextContent(currentYear.toString());
});

test("Renders link", () => {
    render(<Footer />);

    const link = document.querySelector("footer a");

    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Krasimir Dramaliev");
    expect(link).toHaveAttribute("href", "https://github.com/krasipeace");
});