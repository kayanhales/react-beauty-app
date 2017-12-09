import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import SkinCare from "./SkinCare-CheckOut";
import NailArt from "./NailArt-CheckOut";
import Makeup from "./Makeup-CheckOut";
import SkinCareConfirm from "./SkinCare-Confirm";
import NailArtConfirm from "./NailArt-Confirm";
import MakeupConfirm from "./Makeup-Confirm";
import ThankYou from "./ThankYou";

const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/skincare' component={SkinCare}/>
        <Route path='/nailart' component={NailArt}/>
        <Route path='/makeup' component={Makeup}/>
        <Route path='/skinCareConfirm' component={SkinCareConfirm}/>
        <Route path='/nailArtConfirm' component={NailArtConfirm}/>
        <Route path='/makeUpConfirm' component={MakeupConfirm}/>
        <Route path='/thankyou' component={ThankYou}/>
      </Switch>
    </Router>
  </main>
)

export default Main
