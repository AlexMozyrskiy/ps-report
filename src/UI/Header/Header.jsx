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
                                <NavLink to="/third-and-fourth-degrees" className="header__anchor">Третьи и четвертые степени</NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink to="/ekasui-report" className="header__anchor">Отчет в Ед формы ЕКАСУИ</NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink to="/convert-video" className="header__anchor">Ковернтировать из АРМ Видео в Шаблон</NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink to="/telegrams" className="header__anchor">Телеграммы</NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink to="/test" className="header__anchor">Testing Reselect</NavLink>
                            </li>
                            {/* <li className="header__li">
                                <NavLink to="/profile" className="header__anchor">Profile</NavLink>
                            </li> */}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}

export default HeaderNav;