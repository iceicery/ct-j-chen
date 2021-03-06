import './About.css';
import avatar from '../../images/avatar.jpg';
import Pdf from '../../images/ctchen_cv.pdf';
export default function About() {
    return (
        <section className="about">
            <div className="about__img-box">
                <img src={avatar} alt="avatar" className="about__img" />
                <h2 className="about__name">Chien-Ting Chen</h2>
                <h2 className="about__name">(陳建廷)</h2>
                <h2 className="about__name">
                    USRA Research&nbsp;Scientist at NASA MSFC.
                </h2>
                <a href={Pdf} target="_blank" rel="noreferrer" className="about__button-link"><button className="about__button">Here is my CV</button></a>
            </div>
            <div className="about__text-box">
                <h3 className="about__title">About me</h3>
                <p className="about__text">Hi, I'm an astrophysicist who studies supermassive black holes and their connection to galaxy evolution.
			    I am currently a research scientist working in the <a className="about__link" target="_blank" rel="noreferrer" href="https://wwwastro.msfc.nasa.gov/">X-ray group</a> of NASA's Marshall Space Flight Center in Huntsville, Alabama.
				</p>
                <p className="about__text">
                    Before coming to MSFC, I was a postdoctoral researcher at <a className="about__link" target="_blank" rel="noreferrer" href="http://personal.psu.edu/wnb3/index.html">Professor&nbsp;Niel&nbsp;Brandt</a>'s
				research group at Pennsylvania&nbsp;State&nbsp;University. I got my Ph.D. in Physics and Astronomy from <a className="about__link" target="_blank" rel="noreferrer" href="http://physics.dartmouth.edu/">Dartmouth&nbsp;College </a>
				 supervised by <a className="about__link" target="_blank" rel="noreferrer" href="http://www.dartmouth.edu/~hickox/">Professor&nbsp;Ryan&nbsp;Hickox</a>. I received my B.S. and M.S. in Physics and Astronomy from <a className="about__link" target="_blank" rel="noreferrer" href="http://phys.web.nthu.edu.tw/bin/home.php">National&nbsp;Tsing&nbsp;Hua&nbsp;University</a> in Taiwan.
				</p>
                <p className="about__text">
                    Broadly speaking, I am interested in black holes. As an observational astrophysicist, I study the connection between supermassive black holes and galaxy evolution using observations of active galactic nuclei (AGN) and star-forming galaxies from space telescopes such as NuSTAR, Chandra, XMM-Newton, Swift, Spitzer, Herschel, and WISE.
                I also use data from ground-based observations in the optical, near-IR, and radio wavelengths. At MSFC, I primarily work on the scientific analysis program of the <a className="about__link" target="_blank" rel="noreferrer" href="https://wwwastro.msfc.nasa.gov/artxc/">ART-XC</a> telescope onboard the Spectrum Roentgen Gamma mission that was recently launched on July 13th, 2019.
			    </p>
            </div>
        </section >
    )
}