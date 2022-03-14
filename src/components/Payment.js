import React from 'react'
import { useStateValue } from '../StateProvider'
import Checkoutproduct from './Checkoutproduct'
import "./Payment.css"


function Payment() {
    const [{basket,user}, dispatch] = useStateValue()
    return (
        <div className="payment">
            <div className="paymentSection">
                <div className="paymentTitle">
                    <h3>Delivery Address</h3>
                </div>
                <div className="paymentAddress">
                    <p>{user?.email}</p>
                    <p>Lucknow</p>
                    <p>Uttar Pradesh</p>
                </div>
                
            </div>
            <div className="paymentSection">
                <div className="paymentTitle">
                    <h3> Review Items and delivery </h3>
                </div> 
                 <div className="paymentProduct">
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
            <div className="paymentSection">


            </div>




        </div>
    )
}

export default Payment
