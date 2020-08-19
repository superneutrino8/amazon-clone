import React from "react";
import CurrencyFormat from "react-currency-format";

import "./CheckoutProduct.css";

function CheckoutProduct({ item, title, image, rating, price }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="product__price">
                    <small>‎₹‎</small>
                    <strong>
                        <CurrencyFormat
                            value={price}
                            displayType={"text"}
                            thousandSeparator={true}
                            thousandSpacing={"2s"}
                        />
                    </strong>
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
        </div>
    );
}

export default CheckoutProduct;
