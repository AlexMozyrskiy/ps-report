import React from "react";
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';
import { setIsWeAreOnTheWorkTabActionCreator } from "../../state/features/URL/actionCreators";
import { useDispatch } from "react-redux";

const { Header } = Layout;

const MyHeader = () => {
  // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const dispatch = useDispatch();
  // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    const onHeaderLinkClick = (boolVar) => {
        dispatch(setIsWeAreOnTheWorkTabActionCreator(boolVar));
    }

    return (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1"><NavLink to="/work/general-settings" onClick={() => onHeaderLinkClick(true)}>Работа</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/" onClick={() => onHeaderLinkClick(false)}>Пользовательское соглашение</NavLink></Menu.Item>
                <Menu.Item key="3" onClick={() => onHeaderLinkClick(false)}>Благодарности</Menu.Item>
            </Menu>
        </Header>

        // <header className="header">
        //     <div className="container">
        //         <div className="header__flex-wrapper">

        //             <div className="header__logo-and-title">
        //                 <img src="#" alt="logo" className="header__logo" />
        //                 <h2 className="header__title">React test</h2>
        //             </div>

        //             <nav className="header__nav">
        //                 <ul className="header__ul">
        //                     <li className="header__li">
        //                         <NavLink to="/" className="header__anchor">Home</NavLink>
        //                     </li>
        //                     <li className="header__li">
        //                         <NavLink to="/third-and-fourth-degrees" className="header__anchor">Третьи и четвертые степени</NavLink>
        //                     </li>
        //                     <li className="header__li">
        //                         <NavLink to="/ekasui-report" className="header__anchor">Отчет в Ед формы ЕКАСУИ</NavLink>
        //                     </li>
        //                     <li className="header__li">
        //                         <NavLink to="/convert-video" className="header__anchor">Ковернтировать из АРМ Видео в Шаблон</NavLink>
        //                     </li>
        //                     <li className="header__li">
        //                         <NavLink to="/telegrams" className="header__anchor">Телеграммы</NavLink>
        //                     </li>
        //                     <li className="header__li">
        //                         <NavLink to="/test" className="header__anchor">Testing Reselect</NavLink>
        //                     </li>
        //                     {/* <li className="header__li">
        //                         <NavLink to="/profile" className="header__anchor">Profile</NavLink>
        //                     </li> */}
        //                 </ul>
        //             </nav>

        //         </div>
        //     </div>
        // </header>
    );
}

export default MyHeader;