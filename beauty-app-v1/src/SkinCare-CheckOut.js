import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const SkinCare = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Add Skin Care to cart?" price="$100" />
      <p>
        <Link to={"skinCareConfirm"}>
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


export default SkinCare
