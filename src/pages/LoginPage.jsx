import React from 'react';
import {useForm} from 'react-hook-form';

function LoginPage(){
    const { register, errors, handleSubmit } = useForm();
    function saveData(){
        console.log(1)
    }
    return(
        <form onSubmit={handleSubmit(data => saveData(data))}>

            <label htmlFor="">Input Your Email</label>
            <input type="email" name="email" 
            placeholder="Enter Email"
            ref={register({ required: true })}
            />
            {errors.email && "Required"}

            <label>Input Your Password</label>
            <input type="password" name="password" id="" 
            placeholder="Enter Password"
            ref={register({ required: true })}
            />
            {errors.password && "Required"}
        
            <input type="submit" /> 
        </form>
    );
}

export default LoginPage;