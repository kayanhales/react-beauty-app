import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const MakeupConfirm = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Your Makeup purchase" price="$200" />
      <p>Receipt $200.00</p>
      <p>
        <Link to={"thankyou"}>
          <button type="button" className="btn btn-primary">
            Confirm
          </button>
        </Link>
      </p>
      <p>
        <Link to={"/"}>
          <button type="button" className="btn btn-primary">
            Cancel
          </button>
        </Link>
      </p>
    </div>
  </Route>
);

export default MakeupConfirm
