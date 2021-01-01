import "./NavButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBars);

export default function NavButton({ handleNavPopup }) {
    return (
        <section className="navButton" onClick={handleNavPopup}>
            <FontAwesomeIcon icon='bars' />
        </section>
    )
}