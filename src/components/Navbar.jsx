import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify"

export default function Navbar() {
    const navigate = useNavigate();
    const email = localStorage.getItem("email") || "email";

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        toast.success("Logout Successfully")
    }

    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="logo">NewsLetter</div>


                <NavLink
                    to="/chat"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >chat kroge kya</NavLink>
            </div>
            <div className="nav-right">
                <div className="avatar">
                    {email.charAt(0).toUpperCase()}
                </div>
                <span className="user-email">{email}</span>
                <button className="logout-btn" onClick={handleLogout}> Logout</button>

            </div>

        </div>
    )
}