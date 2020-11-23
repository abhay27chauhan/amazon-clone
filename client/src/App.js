import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Hooks/stateProvider';
import { ACTIONS } from './Hooks/reducer';
import Payment from './pages/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './pages/Orders/Orders';

const promise = loadStripe(
  'pk_test_51HqI5CL1eOMA3nNTuaGMIjtNmMaZ7d2EfYjl4zp54mx5m1Nypt28pIKjAitrWarvTqKWrBGFJH9xza604CikuUbq0060cQdDsi'
);
 
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
  // will only going to run once when app component loads....

    auth.onAuthStateChanged(authUser => {

      if(authUser){
        dispatch({type: ACTIONS.SET_USER, user: authUser});
      }else{
        dispatch({type: ACTIONS.SET_USER, user: null});
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
