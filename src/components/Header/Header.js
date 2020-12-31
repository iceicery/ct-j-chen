import './Header.css';
import React from 'react';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

export default function Header() {
    return (
        <section className="header">
            <div className="header__text-box">
                <h3 className="header__text playball">Hi, I am Chien-Ting Chen, USRA Research&nbsp;Scientist at NASA MSFC.</h3>
            </div>
            <div className="header__button-box">
                <button className="header__button"><ScrollLink to="about" offset={-150} smooth={true} duration={500} spy={true}>About Me</ScrollLink></button>
                <button className="header__button"><ScrollLink to="news" offset={-50} smooth={true} duration={500} spy={true}> News Update</ScrollLink></button>
                <button className="header__button"><ScrollLink to="works" offset={-50} smooth={true} duration={500} spy={true}>Recent Work</ScrollLink></button>
            </div>
        </section>
    )
}