import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/api.js"



export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const submit = async () => {
        try {
            const res = await api.post("/auth/forgot-password", { email });
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    const returnLogin = async () => {
        navigate("/")
    }
    return (
        <div className="card">
            <h2>Forgot Password</h2>
            <input
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" onClick={submit}>Send Reset Link</button>
            <button className="btn" onClick={returnLogin}>Back to login</button>
        </div>
    )

}