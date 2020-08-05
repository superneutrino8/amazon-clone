import React from "react";
import Product from "./Product";

import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
                className="home__banner"
                src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/M2ZmNTBiMTEt/M2ZmNTBiMTEt-YjVmMjkzY2It-w1500._CB429544641_.jpg"
                alt=""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id={5421}
                    title="Sapiens: A Brief History of Humankind"
                    price={399.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg"
                />
                <Product
                    id={4853}
                    title="Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future"
                    price={615.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51I-QgidWHL._SX322_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={3652}
                    title="The Last of Us 2 -Standard Edition (PS4)"
                    price={3999.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81l%2BhkZEABL._SL1500_.jpg"
                />
                <Product
                    id={4156}
                    title="Microsoft Surface Pro X "
                    price={96650.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ZqIfidWfL._SL1200_.jpg"
                />
                <Product
                    id={7564}
                    title="Apple MacBook Pro"
                    price={199999.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={3256}
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={140800.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
