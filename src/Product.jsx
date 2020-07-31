import React from "react";
import CurrencyFormat from 'react-currency-format';

import "./Product.css";

function Product({ id, title, price, rating, image }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>‎₹‎</small>
                    <strong><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} thousandSpacing={'2s'} /></strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>
                                <span role="img" aria-label="star">
                                    ⭐
                                </span>
                            </p>
                        ))}
                </div>
            </div>
            <img src={image} alt={title} />
            <button>Add to Basket</button>
        </div>
    );
}

export default Product;
