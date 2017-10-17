import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Makeup = () => (
  <Route>
    <div className="container">
      <Link to={"makeup"}>
        <CartItem itemTitle="Add Makeup to cart?" price="$200" />
      </Link>
    </div>
  </Route>
  )

  export default Makeup
