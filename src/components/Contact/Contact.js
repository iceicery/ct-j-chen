import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faMobile, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import Form from "../Form/Form";
library.add(faHome, faMobile, faMailBulk);
export default function Contact() {
    return (
        <section className="contact">
            <h2 className="contact__title">Get In Touch</h2>
            <p className="contact__subtitle">Feel free to contact me if you have any questions about my research.</p>
            <div className="contact__container">
                <Form />
                <ul className="contact__list-box">
                    <li className="contact__list">
                        <FontAwesomeIcon icon="home" />
                        <p className="contact__list-text">NASA MSFC/ST12 <br />Huntsville, AL,35812 <br />United States</p>
                    </li>
                    <li className="contact__list">
                        <FontAwesomeIcon icon="mobile" />
                        <p className="contact__list-text">256-961-7897</p>
                    </li>
                    <li className="contact__list">
                        <FontAwesomeIcon icon="mail-bulk" />
                        <p className="contact__list-text">chien-ting dot chen at nasa dot gov</p>
                    </li>
                </ul>
            </div>
        </section >
    )
}