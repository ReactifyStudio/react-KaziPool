import React from 'react';
import {useForm} from 'react-hook-form';

function RegisterPage(){
    const { register, errors, handleSubmit } = useForm();
    function saveData(){
        console.log(1)
    }
    return(
        <form onSubmit={handleSubmit(data => saveData(data))}>
            <label>First Name</label>
            <input name="Fname" type="text" 
              placeholder="Your first name" 
              ref={register({ required: true })} 
            />
            {errors.Fname && "Required"}

            <label htmlFor="">Last Name</label>
            <input type="text" name="Lname" 
            placeholder="Your last name" ref={register({ required: true })}
            />
            {errors.Lname && "Required"}

            <label htmlFor="">Email</label>
            <input type="email" name="email" 
            placeholder="Enter Email"
            ref={register({ required: true })}
            />
            {errors.email && "Required"}

            <label htmlFor="">Role</label>
            <select name="" id="">
                <option value="">Client</option>
                <option value="">Job Expert</option>
            </select>

            <label htmlFor="">National ID</label>
            <input type="number" name="id" id="" 
            placeholder="ID Number"
            ref={register({ required: true })}
            />
            {errors.id && "Required"}

            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" id="" 
            placeholder="E.g, 07....."
            ref={register({ required: true })}
            />
            {errors.phone && "Required"}

            <label>Enter Password</label>
            <input type="password" name="password" id="" 
            placeholder="Enter Password"
            ref={register({ required: true })}
            />
            {errors.password && "Required"}
            <label htmlFor="">Confirm Password</label>
            <input type="password" name="confPassword" id="" 
            placeholder="Confirm Password Password"
            ref={register({ required: true })}
            />
            {errors.confPassword && "Required"}

            <input type="submit" /> 
        </form>
    );
}

export default RegisterPage;