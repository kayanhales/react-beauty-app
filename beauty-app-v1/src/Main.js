import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Confirm from "./Confirm";
import CheckOut from "./CheckOut";
import ThankYou from "./ThankYou";
import SkinCare from "./SkinCare-CheckOut";
import NailArt from "./NailArt-CheckOut";
import Makeup from "./Makeup-CheckOut";
import SkinCareConfirm from "./SkinCare-Confirm";
import NailArtConfirm from "./NailArt-Confirm";
import MakeupConfirm from "./Makeup-Confirm";

const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/checkout' component={CheckOut}/>
        <Route path='/confirm' component={Confirm}/>
        <Route path='/thankyou' component={ThankYou}/>
        <Route path='/skincare' component={SkinCare}/>
        <Route path='/nailart' component={NailArt}/>
        <Route path='/makeup' component={Makeup}/>
        <Route path='/skinCareConfirm' component={SkinCareConfirm}/>
        <Route path='/nailArtConfirm' component={NailArtConfirm}/>
        <Route path='/makeUpConfirm' component={MakeupConfirm}/>
      </Switch>
    </Router>
  </main>
)

export default Main
