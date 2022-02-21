import './Navbar.css'
import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
// import {FiMenu, Fix} from "react-icons/fi";

// const navbarLinks = {}

const Navbar = ({navbarLinks}) => {

    const [menuClicked, setMenuClicked] = useState(true)

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }

    return (
        <nav className="navbar">
            <span className="navbar__logo">fun app</span>

            {menuClicked ? <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
                : (<FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />)}


            <ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active"}>
                {navbarLinks.map((item) => {
                    return (
                        <li className="navbar__item" key={item.title}>
                        <a className="navbar__link" href={item.url}>
                            {item.title}
                        </a>
                    </li>
                    )}
                )})
            </ul>
        </nav>
    )
}

export default Navbar
