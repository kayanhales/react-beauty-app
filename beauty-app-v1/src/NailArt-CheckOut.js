import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const NailArt = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Add Nail Art to cart?" price="$150" />
      <p>
        <Link to={"nailArtConfirm"}>
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

export default NailArt
