import React from 'react';
import {useForm} from 'react-hook-form';

function RegisterPage(){
    const { register, handleSubmit } = useForm();
    function saveData(){
        console.log(1)
    }
    return(
        <form onSubmit={handleSubmit(data => saveData(data))}>
            <label>First Name</label>
            <input name="name" type="text" placeholder="Your first name" ref={register} />

            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Your last name"/>


            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter Email"/>

            <label htmlFor="">Role</label>
            <select name="" id="">
                <option value="">Client</option>
                <option value="">Job Expert</option>
            </select>

            <label htmlFor="">National ID</label>
            <input type="number" name="" id="" placeholder="ID Number"/>

            <label htmlFor="">Phone Number</label>
            <input type="tel" name="" id="" placeholder="E.g, 07....."/>

            <label>Enter Password</label>
            <input type="password" name="" id="" placeholder="Enter Password"/>

            <label htmlFor="">Confirm Password</label>
            <input type="password" name="" id="" placeholder="Confirm Password Password"/>

            <input type="submit" /> 
        </form>
    );
}

export default RegisterPage;