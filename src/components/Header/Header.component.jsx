// import { withRouter } from 'react-router-dom'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import './Header.style.scss';

const Brand = () => {
    return (
        <div className="brand">
            balazs burjan
        </div>
    )
}

const Navigation = () => {
    return (
        <nav className="navigation">
            <span>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    home
                </NavLink>
            </span>
            <span>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    about
                </NavLink>
            </span>
        </nav>
    )
}

const MobileNavigation = () => {
    return (
        <nav className="mobile-navigation">
            <span>
                <NavLink to="/">
                    <img src="" alt="" />
                </NavLink>
            </span>
            <span>
                <NavLink to="/about">
                    about
                </NavLink>
            </span>
        </nav>
    )
}

const Header = () => {
    return (
        <header className="header">
            <Brand />
            <Navigation />
            {/* <MobileNavigation /> */}
        </header>
    )
}

export default Header
