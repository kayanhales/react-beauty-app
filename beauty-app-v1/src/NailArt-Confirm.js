import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const NailArtConfirm = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Your Nail Art purchase" price="$150" />
      <p>Receipt $150.00</p>
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

export default NailArtConfirm
