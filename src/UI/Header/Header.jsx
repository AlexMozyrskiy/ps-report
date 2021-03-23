import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__flex-wrapper">

                    <div className="header__logo-and-title">
                        <img src="#" alt="logo" className="header__logo" />
                        <h2 className="header__title">React test</h2>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__ul">
                            <li className="header__li">
                                <NavLink to="/" className="header__anchor">Home</NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink to="/users" className="header__anchor">Users</NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink to="/profile" className="header__anchor">Profile</NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}

export default HeaderNav;