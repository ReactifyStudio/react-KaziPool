import React from 'react';
import {Link} from 'react-router-dom';
import wave from '../assets/wave.png';
import bg from '../assets/bg.svg';
import avatar from '../assets/avatar.svg';

function RegisterPage(){

    return(
<div>
            
<img class="wave" src={wave}/>
<div class="container">
    <div class="img">
        <img src={bg} alt="img"/>
    </div>
    <div class="login-content">
        <form action="index.html">
            <img src={avatar}/>
            <h2 class="title">Register</h2>
               <div class="input-div one">
                  <div class="i">
                          <i class="fas fa-user"></i>
                  </div>
                  <div class="div">
                          <h5>First Name</h5>
                          <input type="text" class="input"/>
                  </div>
               </div>

               <div class="input-div one">
                  <div class="i">
                          <i class="fas fa-user"></i>
                  </div>
                  <div class="div">
                          <h5>Last Name</h5>
                          <input type="text" class="input"/>
                  </div>
               </div>

               <div class="input-div pass">
                  <div class="i"> 
                       <i class="fas fa-envelope-square"></i>
                  </div>
                  <div class="div">
                       <h5>Email</h5>
                       <input type="email" class="input" />
               </div>
            </div>

            <div class="input-div pass">
                  <div class="i"> 
                       <i class=""></i>
                  </div>
                  <div class="div">
                        <select name="" id="">
                        <option value="Client">Role</option>
                        <option value="Client">Client</option>
                        <option value="Job Expert">Job Expert</option>
            </select>
               </div>
            </div>

            <div class="input-div pass">
                  <div class="i"> 
                       <i class="fas fa-id-card"></i>
                  </div>
                  <div class="div">
                       <h5>National ID</h5>
                       <input type="number" class="input" />
               </div>
            </div>

            <div class="input-div pass">
                  <div class="i"> 
                       <i class="fas fa-phone"></i>
                  </div>
                  <div class="div">
                       <h5>Phone Number</h5>
                       <input type="number" class="input" />
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

            <div class="input-div pass">
                  <div class="i"> 
                       <i class="fas fa-lock"></i>
                  </div>
                  <div class="div">
                       <h5>Confirm Password</h5>
                       <input type="password" class="input" />
               </div>
            </div>
            <Link to='/login'>Have an Account? Login here.</Link>
            <input type="submit" class="btn" value="Register"/>
        </form>
    </div>
</div>
        
    </div>
    );
}

export default RegisterPage;