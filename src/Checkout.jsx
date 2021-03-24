import React from 'react'
import './Checkout.css'
import CheckoutProduct from './components/CheckoutProduct';
import Subtotal from './components/Subtotal'
import { useStateValue } from './helpers/StateProvider';

const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="ad"
                />

                <div>
                    <h5>Hello, {user?.email}</h5>
                    <h3 className="checkout__title">Your Shopping Basket</h3>

                    {basket.map((item, i) => (
                        <CheckoutProduct key={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
