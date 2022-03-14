import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"
function Product(props) {

    const [{ basket }, dispatch] = useStateValue();
    // console.log("this is the basket",basket)
    const addtobasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                price: props.price,
                title: props.title,
                rating: props.rating,
                image: props.image
            }
        })
    }
    return (
        <div className="product">
            <div className="productInfo">
                <p>{props.title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="productRating">
                    {Array(props.rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <img className="productImage" src={props.image} alt="" />
            <button onClick={addtobasket} className="productBtn" style={{ "cursor": "pointer" }}>Add to basket</button>

        </div>
    )
}

export default Product
