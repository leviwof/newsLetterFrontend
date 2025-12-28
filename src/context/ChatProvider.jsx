import React, { createContext, useEffect, useState } from 'react'

export const ChatContext = createContext();
const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const socket = new WebSocket("ws://localhost:3000");

    useEffect(() => {
        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, JSON.parse(event.data)]);
        }
    }, []);

    const sendMessage = () => {
        socket.send(JSON.stringify({ text }));
    }
    return (
        <ChatContext.Provider value={{ messages, sendMessage }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
