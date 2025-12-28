import { useNavigate } from "react-router-dom";
import "../styles/app.css";
import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";

export default function Chat() {
    const navigate = useNavigate();
    const [msg, setMsg] = useState("");
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:5000");
        socket.onmessage = (e) => {
            setMessages((prev) => [...prev, e.data]);
        };
        setWs(socket);
    }, [])

    return (

        <div className="center-wrapper">
            <div className="chat-box">
                <h2>Live Chat</h2>

                {messages.map((m, i) => (
                    <p key={i}>{m}</p>
                ))}
                <input onChange={(e) => setMsg(e.target.value)} />
                <button className="btn" onClick={() => ws.send(msg)}>Send</button>

                <button className="btn" onClick={() => navigate("/dashboard")}>
                    Back to Dashboard
                </button>


            </div>
        </div>

    );
}
