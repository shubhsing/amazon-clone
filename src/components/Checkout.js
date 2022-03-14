import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import { useStateValue } from '../StateProvider'
import Checkoutproduct from './Checkoutproduct';

export default function Checkout() {
    const [{ basket ,user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <img className="checkoutAd" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div className="checkoutHeading">
                    <h3>Hello , {user?.email} </h3>
                    <h2>Your Shopping Basket</h2>
                    {basket.map(item =>(
                        <Checkoutproduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                    
                </div>
            </div>
            <div className="checkoutRight">
                <Subtotal/>
            </div>
         
        </div>
    )
}
