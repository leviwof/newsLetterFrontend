import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../api/api.js"
import { toast } from "react-toastify"

export default function Registration() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {

        try {
            if (!email || !password || !confirmPassword) {
                toast.error("All fields are required")
                return;
            }
            if (password !== confirmPassword) {
                toast.error("Password do not match")
                return;
            }

            const res = await api.post("/auth/register", {
                email, password
            })
            toast.success(res.data.message);
            navigate("/")
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration Failed")
        }
    }
    return (
        <div className="center">
            <div className="card">
                <div className="logo-container">
                    <h1 className="logo-text">NewsLetter</h1>
                    <p className="logo-subtext">Create your account</p>
                </div>
                <input
                    placeholder="Enter email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Enter password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    placeholder="confirm password"
                    value={confirmPassword}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={handleRegister}>Register</button>
                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                    Already have an account?{" "}
                    <span
                        style={{
                            color: "#4f46e5",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        onClick={() => navigate("/")}
                    >
                        Login here
                    </span>
                </p>
            </div>
        </div>
    )
}