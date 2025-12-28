import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";

export default function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async () => {
        try {
            await api.post("/auth/reset-password", {
                token,
                password
            });
            toast.success("Password updated");
            navigate("/");
        } catch (err) {
            toast.error(err.response?.data?.message);
        }
    };

    return (
        <div className="card">
            <h2>Reset Password</h2>
            <input
                type="password"
                placeholder="New password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submit}>Reset</button>
        </div>
    );
}
