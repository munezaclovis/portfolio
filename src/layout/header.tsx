import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Hamburger from "../assets/svg/ham-menu.svg";
import Closeburger from "../assets/svg/ham-menu-close.svg";

const Header = () => {
    const [mobileMenu, setmobileMenu] = useState(false);
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <span className="header__logo-sub">
                        <Link to={"/"}>Clovis Muneza</Link>
                    </span>
                </div>
                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <Link to="/" className="header__link">
                                Home
                            </Link>
                        </li>
                        <li className="header__link-wrapper">
                            <Link to="/#about" className="header__link">
                                About
                            </Link>
                        </li>
                        <li className="header__link-wrapper">
                            <Link to="/#experience" className="header__link">
                                Experience
                            </Link>
                        </li>
                        <li className="header__link-wrapper">
                            <Link to="/#projects" className="header__link">
                                Projects
                            </Link>
                        </li>
                        <li className="header__link-wrapper">
                            <Link to="/#contact" className="header__link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="header__main-ham-menu-cont" onClick={() => setmobileMenu(!mobileMenu)}>
                        <img src={Hamburger} alt="hamburger menu" className="header__main-ham-menu" />
                        <img
                            src={Closeburger}
                            alt="hamburger menu close"
                            className="header__main-ham-menu-close d-none"
                        />
                    </div>
                </div>
            </div>
            <div className={`header__sm-menu${mobileMenu ? " header__sm-menu--active" : ""}`}>
                <div className="header__sm-menu-content">
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <Link to="/"> Home </Link>
                        </li>

                        <li className="header__sm-menu-link">
                            <Link to="/#about"> About </Link>
                        </li>

                        <li className="header__sm-menu-link">
                            <Link to="/#experience"> Experience </Link>
                        </li>

                        <li className="header__sm-menu-link">
                            <Link to="/#projects"> Projects </Link>
                        </li>

                        <li className="header__sm-menu-link">
                            <Link to="/#contact"> Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
