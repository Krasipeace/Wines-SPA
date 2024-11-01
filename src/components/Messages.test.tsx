import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Messages from "./Messages";
import { MessageProvider } from "../context/MessageContext";

test("Renders Messages", () => {
    render(
        <MessageProvider>
            <Messages />
        </MessageProvider>
    );

    const header = document.querySelector("h2");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Messages");
});

test("Renders button to clear message", () => {
    render(
        <MessageProvider>
            <Messages />
        </MessageProvider>
    );

    const button = document.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Clear Messages");
});