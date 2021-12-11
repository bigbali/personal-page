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
                <NavLink to="/">
                    home
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
        </header>
    )
}

export default Header
