import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Makeup = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Add Makeup to cart?" price="$200" />
      <p>
        <Link to={"makeUpConfirm"}>
          <button type="button" className="btn btn-primary">
            Add To Cart
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

export default Makeup
