import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleClick = (e) => {
        e.preventDefault()
        const login = { email, password }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.length === 0) {
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
            console.log(login)
            alert("Welcome " + login.email)
        }

    }

    return (
        <div className='page'>
            <div className='cover'><br />
                <h1>Login to Your Account</h1><br />
                <label htmlFor="email">Email Addres</label>
                <input type="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@example.org' /><br />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='********' required /><br />
                <button className='btn' onClick={handleClick}>Login</button><br />
            </div>
            <div className='apa'>
                <p>Already Have an Account? .
                    <Link to="/register">Register</Link>
                </p>
            </div>
            <div className='ava'>
                <p>Forgotten your password? .
                    <a href='#'>Recover Password</a>
                </p>
            </div>
        </div>
    )
}

export default login