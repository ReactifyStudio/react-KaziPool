import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/F04.css";
function F04() {
    return (
        <div>
            <div className="container f04">
                <h1 className="code">404</h1>
                <Link to='/'>
                <button className="call-to-action">You're Lost, Go Home</button>
                </Link>
                <h3 className="info">Page Not Found</h3>
            </div>
        </div>
    )
}

export default F04
