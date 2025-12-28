import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/app.css";
// import newsletter from "../components/NewsLetter/NewsLetterList"
import api from "../api/api";
import newslettersData from "../data/newsletters.json"
import Navbar from "../components/Navbar";
import Shimmer from "../components/Shimmer"
import { toast } from "react-toastify"

export default function Dashboard() {
    const navigate = useNavigate();
    const [newsletters, setNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadSubscription = async () => {
        try {
            setLoading(true);
            const res = await api.get("/authnew/my-subscription");
            const SubscribedIds = res.data.map((s) => s.newsletterId);
            const updatedSub = newslettersData.map((n) => ({ ...n, subscribed: SubscribedIds.includes(n._id) }))
            // setNewsletters((prev) => prev.map((n) => ({ ...n, subscribed: SubscribedIds.includes(n._id) })))
            setNewsletters(updatedSub)

        } catch (error) {
            // console.log("Failed to load Subscriptions")
            setNewsletters(newslettersData);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        loadSubscription();
    }, [])
    const handleSubscribe = async (newsletterId, isSubscribed) => {
        try {
            if (isSubscribed) {
                const res = await api.post("/authnew/unsubscribe", {
                    newsletterId: newsletterId,
                });

                toast.success("Unsubscribed successfully");

            } else {
                const res = await api.post("/authnew/subscribe", {
                    newsletterId: newsletterId,
                    notifyTime: "10:00 AM"
                });
                toast.success("Subscribed successfully");
            }
            // setNewsletters((prev) => prev.map((item) => item._id === newsletterId ? { ...item, subscribed: !item.subscribed } : item))
            loadSubscription();
        } catch (err) {
            toast.error(err.response?.data?.message || "Subscription failed");
        }

    }

    return (
        <>
            <Navbar />
            <div className="center-wrapper">
                <div className="dashboard">
                    <h2>Dashboard</h2>

                    {loading && <Shimmer />}
                    {!loading
                        && newsletters.map((item) => (
                            <div className="news-card" key={item._id}>
                                <span>{item.name}</span>
                                <button className={item.subscribed ? "btn danger" : "btn"} onClick={() => handleSubscribe(item._id, item.subscribed)}>{item.subscribed ? "Unsubscribe" : "Subscribe"}</button>
                            </div>
                        ))}


                </div>
            </div>
        </>);
}
