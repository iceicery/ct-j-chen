import "./NavPopup.css";
import Scroll from 'react-scroll';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect } from "react";
library.add(faTimes);
const ScrollLink = Scroll.Link;

export default function NavPopup({ isNavOpen, handleNavClose }) {
    const popupClass = isNavOpen ? "nav" : "nav__hidden";
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            handleNavClose();
        }
    }, [handleNavClose]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <div className={popupClass}>
            <button className="nav__icon" onClick={handleNavClose}><FontAwesomeIcon icon="times" /></button>
            <button className="nav__button"><ScrollLink to="about" smooth={true} duration={500} spy={true}>About Me</ScrollLink></button>
            <button className="nav__button"><ScrollLink to="news" smooth={true} duration={500} spy={true}> News Update</ScrollLink></button>
            <button className="nav__button"><ScrollLink to="works" smooth={true} duration={500} spy={true}>Recent Work</ScrollLink></button>
            <button className="nav__button"><ScrollLink to="contact" smooth={true} duration={500} spy={true}>Contact Me</ScrollLink></button>
        </div>
    )
}