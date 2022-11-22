import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate()
    




    const handleClick = (e) => {
        e.preventDefault()
        const register = { firstName, lastName, email, password }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (firstName.length === 0) {
            console.log('First Name is empty')
            alert("First Name is empty");
        } else if (lastName.length === 0) {
            console.log('last Name is empty')
            alert("last Name is empty");
        } else if (email.length === 0) {
            console.log('Email is empty')
            alert('email is empty');
        } else if (!re.test(email)) {
            console.log('Incorrect email format')
            alert("Incorrect email format");
        } else if (password.length === 0) {
            console.log('Password is empty')
            alert("password is empty");
        } else if (password.length < 8) {
            console.log('Password min 8 character')
            alert("Password min 8 character")
        } else {
            console.log(register)
            alert(register.firstName + " is succesfully registered");
            // fetch("http://localhost:8080/users/add/",{
            //     method:"POST",
            //     headers:{"Content-Type":"application/json"},
            //     body:JSON,stringify(register)

            // }),then(()=>{
            //     console.log('new register added')
            // })
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/users/add/",register)
        navigate("/register")
    };

    return (
        <div className='page'>
            <div className='cover2'><br />
            <form onSubmit={(e)=>onSubmit(e)}>

                <h1>Create Your Account</h1><br />
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={firstName} autoFocus onChange={(e) => setFirstName(e.target.value)} placeholder='Masukkan First Name' required /><br />
                <label htmlFor="lastName">lastName</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Masukkan Last Name' required /><br />
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Masukkan Email' required /><br />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Masukkan Password' required /><br />
                <button className='btn' onClick={handleClick}>Register</button><br />
            </form>
            </div>
            <div className='apa2'>
                <p>Already Have an Account? .
                    <Link to="/login">Sign In</Link>
                </p>
            </div>
        </div>
    )
}

export default register