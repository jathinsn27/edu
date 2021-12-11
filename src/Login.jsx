import React from 'react';
import './Login.css';
import logo from './images/educhess_logo.png';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login_logo" src={logo} alt="Logo"/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    {/* <h5>E-mail</h5> */}
                    <input type='text' placeholder='Email'/>

                    {/* <h5>Password</h5> */}
                    <input type='password' placeholder='Password'/>

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>By Signing in i confirm</p>

                <button className='login__registerButton'>Create your Account</button>
            </div>

        </div>
    )
}

export default Login
