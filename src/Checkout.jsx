import React from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";

import "./Checkout.css";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout--left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div className="checkout__title">
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more
                            items, click "Add to Basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div className="checkout__title">
                        <h2>Your Shopping Basket</h2>
                        {basket?.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                item={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket?.length > 0 ? (
                <div className="checkout--right">
                    <div className="checkout__subtotal">
                        <p>
                            Subtotal ({basket.length} {basket.length === 1 ? "item" : "items"}): &nbsp;
                            <strong>
                                <CurrencyFormat
                                    value={basket?.reduce(
                                        (totalValue, currentValue) =>
                                            totalValue + currentValue.price,
                                        0
                                    )}
                                    decimalScale={2}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    thousandSpacing={"2s"}
                                    prefix={"₹‎"}
                                />
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" name="gift" id="gift" />
                            This order contains gift
                        </small>
                        <button className="checkout__button">
                            Proced to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Checkout;
