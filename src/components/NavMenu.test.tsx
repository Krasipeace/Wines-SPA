import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import NavMenu from "./NavMenu";
import { BrowserRouter } from "react-router-dom";

test("Renders NavMenu", () => {
    render(
        <BrowserRouter>
            <NavMenu />
        </BrowserRouter>
    );

    const navMenu = document.querySelector("nav");

    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toHaveClass("bg-pink-200 p-1 mt-2");
});

test("Renders links", () => {
    render(
        <BrowserRouter>
            <NavMenu />
        </BrowserRouter>
    );

    const links = document.querySelectorAll("nav ul li a");

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/dashboard");
    expect(links[1]).toHaveAttribute("href", "/wines");
});