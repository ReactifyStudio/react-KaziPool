import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


function Header(props) {


    return (
        <Fragment>
                  <nav class="navbar sticky-top navbar-expand-lg navbar-light main-nav">
  <a class="navbar-brand  text-white" href="/"><h2>KaziPool</h2></a>
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
    <Link to='/'> 
    <li>
        Help & FAQ
    </li>
    </Link> 
    <Link to='/contact'>       
    <li>
        Contact Us
    </li>
    </Link>           

    <div className="login-register">
    <Link to='/login'>
    <button className="btn btn-login-link">Login</button>
    </Link>
    <Link to='/register'>
    <button className="btn btn-register-link">Register</button>
    </Link>
    </div>
    </ul>
  </div>
</nav> 

        </Fragment>
    )
}

export default Header
