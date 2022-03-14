import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {  auth } from '../firebase'
import "./Loginpage.css"

function Loginpage() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signin = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })

            .catch((error) => {
                alert(error.message)
                // ..
            });
    }
    const signup = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Signed in 
                if (auth) {
                    history.push('/')
                }
                console.log(auth)

                // ...
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }
    return (
        <div className="loginPage">
            <Link to="/">
                <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" alt="" className="loginLogo" />
            </Link>
            <div className="loginContainer">
                <h1>Sign In</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signin} className="signin">Sign-in</button>
                </form>
                <p>By signing into amazon you confitm the terms and policies of Amazon and confirm to login with the risk as it is a clone</p>
                <button type="submit" onClick={signup} className="signup">Create an Amazon account</button>
            </div>
        </div>
    )
}

export default Loginpage
