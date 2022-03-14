import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider'
import './Header.css'


function Header() {

    const [{basket,user},dispatch]= useStateValue();
    const handleClick = ()=>{
    if(user){
        auth.signOut()
    }
}
    return (
        <div className="header">
            <Link to="/">
            <img className="headerLogo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" alt="" />

            </Link>
            <div className="headerSearch">
                <input className="searchInput" type="text" />
                <img className='searchIcon' src="https://www.freeiconspng.com/uploads/search-icon-png-1.png" alt="" />
            </div>
            <div className="headerNav">
                <Link to={!user && "/login"}>
                <div onClick={handleClick} className="headerOptions">
                    <span className="headerOption1">Hello {!user?"Guest":user.email} </span>
                    <span className="headerOption2">{user ? "Sign Out":"Sign In" } </span>
                </div>
                </Link>
                <div className="headerOptions">
                    <span className="headerOption1">Returns</span>
                    <span className="headerOption2"> & Your Orders </span>
                </div>
                <div className="headerOptions">
                    <span className="headerOption1">Your</span>
                    <span className="headerOption2">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="cartIcon">
                <img src="https://img.icons8.com/material-sharp/24/ffffff/shopping-basket-2.png" alt="" />
                <span className="basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
