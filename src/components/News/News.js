import './News.css';
import newsArt from '../../images/news-ART-XC.JPG';
import ReactPlayer from "react-player";
export default function News() {
    return (
        <section className="news">
            <h2 className="news__title"> News update</h2>
            <ul className="news__list-box">
                <li className="news__list">
                    <div >
                        <p className="news__text">05/16/2020:</p>
                        <p className="news__text">In U.S. Space & Rocket Center interview, Joseph talks with Dr. Chien-Ting Chen from NASA-MARSHALL about supermassive black holes, how they impact the galaxies they're in and what happens when you don't ask questions.</p>
                    </div>
                    <ReactPlayer url="https://www.youtube.com/watch?v=TiKltavBz1U" />
                </li>
                <li className="news__list news__list_flex">
                    <div>
                        <p className="news__text">07/13/2019:</p>
                        <p className="news__text">the Russian-German X-ray space telescope Spektr-RG was recently launched on July 13th! See&nbsp;<a className="news__link" target="_blank" rel="noreferrer" href="https://wwwastro.msfc.nasa.gov/artxc/docs/launch.html">this&nbsp;webpage</a> for more information.</p>
                    </div>
                    <img src={newsArt} alt="ART-XC" className="news__img" />
                </li>
            </ul>
        </section>
    )
}