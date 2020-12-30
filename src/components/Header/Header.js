import './Header.css';
export default function Header() {
    return (
        <section className="header">
            <div className="header__text-box">
                <h3>Hi, I am Chien-Ting Chen,</h3>
                <h3>USRA Research&nbsp;Scientist at NASA MSFC.</h3>
            </div>
            <div className="header__button-box">
                <button className="header__button">About Me</button>
                <button className="header__button">News Update</button>
                <button className="header__button">Recent Work</button>
            </div>
        </section>
    )
}