import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => console.log(e));
    };

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => console.log(e));
    };

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
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        name="pass"
                        id="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="login__button"
                        type="submit"
                        onClick={login}
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Condition of Use & Sale.
                    Please see out Privacy Notice, our Cookies Notice and our
                    Interset-Based Ads Notice.
                </p>
                <button
                    className="login__button login__button--white"
                    onClick={register}
                >
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
