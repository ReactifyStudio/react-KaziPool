import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = ()=> setSidebar(!sidebar)

    return (
        <Fragment>
            <header className="header" id="header">
                <div className="header__toggle">
                <i class='bx bx-menu' className="header-toggle"></i>
                </div>
                <div className="header__img">
                    <img src="../assets/avatar.jpg" alt=""/>
                </div>
            </header>
            <div className="l-navbar">
                <nav className="nav">
                    <div>
                        <a href="#" className="nav__logo">
                            <i className="bx bx-layer nav__logo-icon"></i>
                            <span className="nav__logo-name">KaziPool</span>
                        </a>
                        <div className="nav__list">
                            <a href="#" className="nav__link">
                                <i className="bx bx-grid-alt nav__icon"></i>
                                <span className="nav__name">Dashboard</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className="bx bx-grid-alt nav__icon"></i>
                                <span className="nav__name">Users</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className="bx bx-message-square-detail nav__icon"></i>
                                <span className="nav__name">Messages</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className="bx bx-bookmark nav__icon"></i>
                                <span className="nav__name">Favorites</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className="bx bx-folder nav__icon"></i>
                                <span className="nav__name">Data</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
                                <span className="nav__name">Analytics</span>
                            </a>
                        </div>
                    </div>
                    <a href="#" className="nav__link">
                        <i className="bx bx-log-out nav__icon"></i>
                        <span className="nav__name">Logout</span>
                    </a>
                </nav>
            </div>
           
        </Fragment>
    )
}

export default Navbar
