import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://m.media-amazon.com/images/I/71N5zKXa2HL._SX3000_.jpg" alt="" />
                
                <div className="homeRow">
                    <Product
                       id={1}  title="Apple Watch" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/41WKSzftscS._AC_SR400,600_.jpg" rating={5} />
                    <Product id={3}
                        title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0" price={29.99} image="https://m.media-amazon.com/images/I/71ByNT34bfL._SX522_.jpg" rating={5} />
                </div>
                <div className="homeRow">
                    <Product id={2}  title="
                    ASUS TUF Gaming F15" price={29.99} image="https://m.media-amazon.com/images/I/914o5xV1+8L._AC_SX615_SY462_.jpg" rating={5} />
                    <Product
                     id="23445930"
                     title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                     price={98.99}
                     rating={5}
                     image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                      />
                    <Product 
                   id="3254354345"
                   title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                   price={598.99}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="homeRow">
                    <Product 
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
