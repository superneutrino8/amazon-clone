import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

import "./Header.css";

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) auth.signOut();
    };

    // console.log(user);

    return (
        <nav className="header">
            {/* Logo on left */}
            <Link to="/">
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                    className="header__logo"
                />
            </Link>
            {/* Search Box */}
            <div className="header__search">
                <input type="text" className="header__searchBox" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 Links */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to={!user && "/login"} className="header__link">
                    <div className="header__option" onClick={login}>
                        <span className="header__option--line1">
                            Hello {user ? user.email.split("@")[0] : "There"}
                        </span>
                        <span className="header__option--line2">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option--line1">Return</span>
                        <span className="header__option--line2">& Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option--line1">Your</span>
                        <span className="header__option--line2">Prime</span>
                    </div>
                </Link>
            </div>
            {/* Basket */}
            <Link to="/checkout" className="header__link">
                <div className="header__basket">
                    {/* Icon */}
                    <ShoppingBasketIcon className="header__basketIcon" />
                    {/* Item Count */}
                    <span className="header__option--line2 header__basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </nav>
    );
}

export default Header;
