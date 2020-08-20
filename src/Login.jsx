import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
    return (
        <div className="login">
            <Link path="/">
                <img
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                    className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h2>Sign In</h2>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" name="email" id="email" />
                    <h5>Password</h5>
                    <input type="password" name="pass" id="pass" />
                    <button className="login__button" type="submit">
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Condition of Use & Sale.
                    Please see out Privacy Notice, our Cookies Notice and our
                    Interset-Based Ads Notice.
                </p>
                <button className="login__button login__button--white">
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
