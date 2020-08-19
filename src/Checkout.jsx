import React from "react";
import { useStateValue } from "./StateProvider";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
            {basket?.length === 0 ? (
                <div className="">
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more
                        items, click "Add to Basket" next to the item.
                    </p>
                </div>
            ) : (
                <div className="">
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
    );
}

export default Checkout;
