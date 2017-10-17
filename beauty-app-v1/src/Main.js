import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import SkinCare from "./SkinCare-CheckOut";
import SkinCareConfirm from "./SkinCare-Confirm";
import NailArt from "./NailArt-CheckOut";
import Makeup from "./Makeup-CheckOut";
import ThankYou from "./ThankYou";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/skincare' component={SkinCare}/>
        <Route path='/nailart' component={NailArt}/>
        <Route path='/makeup' component={Makeup}/>
        <Route path='/skinCareConfirm' component={SkinCareConfirm}/>
        <Route path='/thankyou' component={ThankYou}/>
      </Switch>
    </Router>
  </main>
)

export default Main
