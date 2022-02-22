import './Navbar.css'
import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";

const Navbar = ({navbarLinks}) => {

    const [menuClicked, setMenuClicked] = useState(true)

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }

    return (
        <nav className="navbar">
            <a href="https://fun-app-19ltju.herokuapp.com">
                <span className="navbar-logo">fun app</span>
            </a>

            {menuClicked ? <FiMenu size={25} className="navbar-menu" onClick={toggleMenuClick} />
                : (<FiX size={25} className="navbar-menu" onClick={toggleMenuClick} />)}


            <ul className={menuClicked ? "navbar-list" : "navbar-list navbar-list--active"}>
                {navbarLinks.map((item) => {
                    return (
                        <li className="navbar-item" key={item.title}>
                        <a className="navbar-link" href={item.url}>
                            {item.title}
                        </a>
                    </li>
                    )}
                )}
            </ul>
        </nav>
    )
}

export default Navbar
