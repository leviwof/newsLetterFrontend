
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Chat from "./pages/Chat"
import Registration from "./pages/Registraation";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword"
// import { AuthProvider } from "./context/AuthProvider"
// import { ChatProvider } from "./context/ChatProvider"

const App = () => {
    return (
        // <AuthProvider>
        // <ChatProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />

            </Routes>
        </BrowserRouter>
        // </ChatProvider>
        // </AuthProvider>
    )
}

export default App
