export default function NewsLetterCard({ data }) {
    return (
        <div style={{ border: "1px solod gray", padding: 10, margin: 10 }}>
            <h4>{data.name}</h4>
            <button>Subscribe</button>
        </div>
    )
}