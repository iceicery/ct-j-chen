import WorkList from "../WorkList/WorkList";
import "./Works.css";
import { works } from "../../utils/works";

export default function Works() {
    return (
        <section className="works">
            <h2 className="works__title">Recent Work</h2>
            <p className="works__subtitle">
                Here's the brief summary of the past and present projects to which
                I have had primary intellectual or observational contributions.
                I am also a co-author for 14 other peer-reviewed papers to which I have had significant contributions.
		    </p>
            <ul className="works__list">
                {
                    works.map((item, i) => <WorkList key={i} image={item.image} title={item.title} text={item.text} dataButton={item.dataButton} dataLink={item.dataLink} paperButton={item.paperButton} paperLink={item.paperLink} />)
                }
            </ul>
            <a href="https://ui.adsabs.harvard.edu/#search/q=orcid%3A0000-0002-4945-5079&sort=date+desc" target="_blank" rel="noreferrer" className="works__button-link"><button className="works__button">More publications on ADS</button></a>
        </section>
    )
}