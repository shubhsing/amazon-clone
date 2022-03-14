import React from 'react'
import "./Checkoutproduct.css"
import { useStateValue } from '../StateProvider'

function Checkoutproduct(props) {
    const [{ basket }, dispatch] = useStateValue();
    const remove = ()=>
    {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.id

        })
    }
    return (
        <div className="checkoutProduct">
            <img className="image" src={props.image} alt="" />
            <div className="productInfo">
                <p className="title">{props.title}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <p className="rating">
                    {Array(props.rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </p>
            <button style={{"cursor":"pointer"}}onClick={remove} className="btn">Remove From Basket</button>
            </div>
        </div>
    )
}

export default Checkoutproduct
