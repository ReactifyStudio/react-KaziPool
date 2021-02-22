import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


function Header(props) {


    return (
        <Fragment>
                  <nav class="navbar sticky-top navbar-expand-lg navbar-light main-nav">
  <a class="navbar-brand  text-white" href="/">KaziPool</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <Link to='/'>
    <li>        
        Hire An Expert
    </li>
    </Link>

    <Link to='/'>
    <li>
       Become An Expert
    </li>
    </Link>

    <Link to='/'>
    <li>
       How It Works
    </li>
    </Link>

    <Link to='/'>
    <li>
        Latest Jobs
    </li>
    </Link>     
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
            <button>Register</button>
            </Link>
    </ul>
  </div>
</nav> 

        </Fragment>
    )
}

export default Header
