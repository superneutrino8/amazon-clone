import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <h1>Checkout Page</h1>
                    </Route>
                    <Route path="/login">
                        <h1>Login Page</h1>
                    </Route>
                    <Route extact path="/">
                        <Header />
                        <h1>Home Page</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
