import { useContext, useState } from "react"
import ChatProvider from "../../context/ChatProvider";


export default function ChatBox() {
    const [text, setText] = useState("");
    const { messages, sendMessage } = useContext(ChatProvider);

    return (
        <div>
            {messages.map((m, i) => (
                <p key={i}>{m.text}</p>
            ))}
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => sendMessage(text)}>Send</button>

        </div>
    )
}