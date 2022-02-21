import './Navbar.css'
// import {FiMenu, Fix} from "react-icons/all";

// const navbarLinks = {}

const Navbar = ({navbarLinks}) => {
    return (
        <nav className="navbar">
            <span className="navbar__logo">fun app</span>
            <ul className="navbar__list">
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
