import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="Logo"/>
            </Link>
            <h1>This is Login</h1>
        </div>
    )
}

export default Login
