export type MessageContextType = {
    messages: string[];
    addMessage: (message: string) => void;
    clearMessages: () => void;
}