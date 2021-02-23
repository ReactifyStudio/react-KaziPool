import React from 'react';
import {Link} from 'react-router-dom';
import wave from '../assets/wave.png'
import bg from '../assets/bg.svg'
import avatar from '../assets/avatar.svg'

function LoginPage() {
    return (
        <div>
            
	<img class="wave" src={wave} alt="img"/>
	<div class="container">
		<div class="img">
			<img src={bg} alt="img"/>
		</div>
		<div class="login-content">
			<form action="index.html">
			 	<img src={avatar} alt="img"/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" class="input"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input" />
            	   </div>
            	</div>
            	<Link to="/">Forgot Password?</Link>
				
            	<input type="submit" class="btn" value="Login"/>
				<h5><Link to='/register'>Register here</Link></h5>
            </form>
        </div>
    </div>
        </div>
    )
}

export default LoginPage

