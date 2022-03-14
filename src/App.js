import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './components/Checkout';
import Loginpage from './components/Loginpage'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("THE USER is >>", authUser)
      // eslint-disable-next-line
      if(authUser)
      {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className='app'>
      <Switch>
      <Route path="/login">
          <Loginpage/>
        </Route>
        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        <Route path="/payment">
        <Header/>
          <Payment/>
        </Route>
        <Route path="/">
        <Header/>
          <Home/>
        </Route>
     </Switch>
    </div>
    </Router>
  )
}

export default App;
