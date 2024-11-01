import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import { MessageProvider } from "./context/MessageContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

test("Renders App", () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
    ]);

    render(
        <MessageProvider>
            <RouterProvider router={router} />
        </MessageProvider>
    );

    const header = document.querySelector("h1");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Wines");
});

test("Renders NavMenu", () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
    ]);

    render(
        <MessageProvider>
            <RouterProvider router={router} />
        </MessageProvider>
    );

    const navMenu = document.querySelector("nav");

    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toHaveClass("bg-pink-200 p-1 mt-2");
});

test("Renders Footer", () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
    ]);

    render(
        <MessageProvider>
            <RouterProvider router={router} />
        </MessageProvider>
    );

    const footer = document.querySelector("footer");

    expect(footer).toBeInTheDocument();
});

test("Renders Messages", () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
    ]);

    render(
        <MessageProvider>
            <RouterProvider router={router} />
        </MessageProvider>
    );

    const header = document.querySelector("h2");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Messages");
});