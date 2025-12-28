import NewsLetterCard from "./NewsLetterCard"
import api from "../../api/api.js"

export default function NewsLetterList() {
    const newsLetters = [
        { id: 1, name: "Tech Weekly", link: "https://tech.com" },
        { id: 2, name: "Ai Digest", link: "https://ai.com" },
    ];

    const handleSubscribe = async (id) => {
        try {
            const res = await api.post("/newsletter/subscribe", {
                newsletterId: id,
                notifyTime: "10.00 AM"
            })
            alert(res.data.message);
        } catch (error) {
            alert(error.response.data?.message || "Subscription Faile")
        }
    }

    return (
        <div>
            <h3>Available NewsLetters</h3>
            {newsLetters.map((e) => (
                // <NewsLetterCard key={e.id} data={e} />
                <div key={e._id} className="news-card">
                    <span>{e.name}</span>
                    <button onClick={() => handleSubscribe(e._id)}>Subscribe</button>
                </div>
            ))}
        </div>
    )
}