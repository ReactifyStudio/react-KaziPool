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
            </header>
           
        </Fragment>
    )
}

export default Navbar
