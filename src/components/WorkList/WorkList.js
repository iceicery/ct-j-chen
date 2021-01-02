import "./WorkList.css";

export default function WorkList({ image, title, text, dataButton, dataLink, paperButton, paperLink }) {
    const dataButtonClass = dataButton ? "works__button-link" : "hidden";
    const paperButtonClass = paperButton ? "works__button-link" : "hidden";
    return (
        <section className="worklist">
            <img src={image} alt="cosmic variance" className="worklist__img" />
            <div className="worklist__text-box">
                <h3 className="worklist__title">{title}</h3>
                {text}

            </div>
            <ul className="worklist__button-box">
                <a href={dataLink} target="_blank" rel="noreferrer" className={dataButtonClass}><button className={"worklist__button"}>{dataButton}</button></a>
                <a href={paperLink} target="_blank" rel="noreferrer" className={paperButtonClass}><button className="worklist__button">{paperButton}</button></a>
            </ul>
        </section >
    )
}