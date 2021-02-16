import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


function Header(props) {


    return (
        <Fragment>
        <nav className="header-nav">
            <Link to='/'>
            <h1>KaziPool</h1>
            </Link>
            <div>
            <li>
            Hire An Expert
            </li>
            <li>
                Become An Expert
            </li>
            <li>
                How It Works
            </li>
            <li>
                Latest Jobs
            </li>
            <li>
                Blog
            </li>
            <li>
                Help & FAQ
            </li>
            <li>
                Contact Us
            </li>
            <Link to='/login'>
            <button>Login</button>
            </Link>
            <Link to='/signup'>
            <button>Signu Up</button>
            </Link>
            
            </div>
        </nav>
        </Fragment>
    )
}

export default Header
