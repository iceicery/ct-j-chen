import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faRocket, faBook } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faRocket, faBook);
export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__box">
                <li><a href="https://ui.adsabs.harvard.edu/#search/q=orcid%3A0000-0002-4945-5079&sort=date+desc" className="footer__icon fa-rocket"><FontAwesomeIcon icon="rocket" /> <span class="footer__label">ADS</span></a></li>
                <li><a href="https://github.com/CTJChen?tab=repositories" className="footer__icon"><FontAwesomeIcon icon={['fab', 'github']} /><span class="footer__label">Github</span></a></li>
                <li><a href="https://scholar.google.com/citations?user=dIh4svgAAAAJ&hl=en" className="footer__icon"><FontAwesomeIcon icon={['fab', 'google']} /><span class="footer__label">GoogleScholar</span></a></li>
                <li><a href="https://www.researchgate.net/profile/Chien-Ting_Chen" className="footer__icon"><FontAwesomeIcon icon='book' /><span class="footer__label">ResearchGate</span></a></li>
                <li><a href="https://www.linkedin.com/in/chien-ting-jan-chen-0b979546" className="footer__icon"><FontAwesomeIcon icon={['fab', 'linkedin']} /><span class="footer__label">LinkedIn</span></a></li>
            </ul>
            <ul className="footer__copyright">
                <li>&copy; Chien-Ting Chen, Last Updated: April 2017</li>
                <li>Images: courtesy of NOAO and NASA</li>
                <li>Design: <a className="footer__link" href="https://iceicery.github.io/pesonal-website-react/">Pinwei Wu</a></li>
            </ul>
        </footer>
    )
}