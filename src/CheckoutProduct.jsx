import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

import "./CheckoutProduct.css";

function CheckoutProduct({ item, title, image, rating, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: item,
        });
    };

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
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
