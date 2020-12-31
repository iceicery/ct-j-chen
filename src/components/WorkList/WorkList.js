import "./WorkList.css";

export default function WorkList({ image, title, text }) {
    return (
        <section className="worklist">
            <img src={image} alt="cosmic variance" className="worklist__img" />
            <div className="worklist__text-box">
                <h3 className="worklist__title">{title}</h3>
                {text}
            </div>
        </section>
    )
}