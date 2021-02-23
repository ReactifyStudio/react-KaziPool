import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import profilePic from './avatar.jpg'
function Navbar() {
    // const [sidebar, setSidebar] = useState(false)

    const showSidebar = ()=> setSidebar(!sidebar)

    return (
        <Fragment>
            <div className="l-navbar">
                <nav className="nav">
                    <div>
                        <Link to='/' className="nav__logo">
                        
                            <i className="bx bx-layer nav__logo-icon"></i>
                            <span className="nav__logo-name">KaziPool</span>
                        
                        </Link>
                        <div className="nav__list">
                            <Link to='/' className="nav__link">
                                <i className="bx bx-grid-alt nav__icon"></i>
                                <span className="nav__name">Dashboard</span>
                            </Link>
                            <Link to='/' className="nav__link">
                                <i className="bx bx-grid-alt nav__icon"></i>
                                <span className="nav__name">Users</span>
                            </Link>
                            <Link to='/' className="nav__link">
                                <i className="bx bx-message-square-detail nav__icon"></i>
                                <span className="nav__name">Messages</span>
                            </Link>
                            <Link to='/' className="nav__link">
                                <i className="bx bx-bookmark nav__icon"></i>
                                <span className="nav__name">Favorites</span>
                            </Link>
                            <Link to='/' className="nav__link">
                                <i className="bx bx-folder nav__icon"></i>
                                <span className="nav__name">Data</span>
                            </Link>
                            <Link to='/' className="nav__link">
                                <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
                                <span className="nav__name">Analytics</span>
                            </Link>
                        </div>
                    </div>
                    <Link to='/' className="nav__link">
                        <i className="bx bx-log-out nav__icon"></i>
                        <span className="nav__name">Logout</span>
                    
                    </Link>
                </nav>
            </div>
            
    <main>
        <section class="glass">
            <div class="dashboard">
                <div class="user">
                    <img src={profilePic} alt=""/>

                    <h3>Winchy Njugia</h3>                    
                </div>
                <div class="links">
                    <div class="link">
                       <button>Manage Profile</button>

                    </div>
                    <div class="link">
                        <button>Post new Job</button>
                    </div>
                    <div class="link">
                        <button>Manage Jobs</button>
                    </div>
                    <div class="link">
                        <button>Track Progress</button>
                    </div>
                </div>
            </div>
        </section>
    </main>           
        </Fragment>
    )
}

export default Navbar
