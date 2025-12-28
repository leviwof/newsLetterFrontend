import { useNavigate } from "react-router-dom";
import "../styles/app.css";
import { useState } from "react";
import api from "../api/api.js"
import { toast } from "react-toastify"



export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", { email, password })
            // if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", email);
            api.defaults.headers.common["Authorization"] =
                `Bearer ${res.data.token}`;
            navigate("/dashboard");
            // }
        } catch (err) {
            toast.error(err?.response?.data?.message || "Login Failed")

        }
    }
    const handleForgotPassword = async () => {
        navigate("/forgot-password")
    }

    return (
        <div className="center-wrapper">
            <div className="card">
                <div className="logo-container">
                    <h1 className="logo-text">NewsLetter</h1>
                    <p className="logo-subtext">Login to your account</p>
                </div>

                <input placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />

                <button className="btn" onClick={handleLogin}>Login</button>
                <button className="btn" onClick={handleForgotPassword}>Forgot Password</button>
                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                    Don't have an account?{" "}
                    <span
                        style={{
                            color: "#4f46e5",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        onClick={() => navigate("/register")}
                    >
                        Register here
                    </span>
                </p>
            </div>
        </div>
    );
}
