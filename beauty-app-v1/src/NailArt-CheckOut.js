import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const NailArt = () => (
  <Route>
    <div className="container">
      <Link to={"nailart"}>
        <CartItem itemTitle="Add Nail Art to cart?" price="$150" />
      </Link>
    </div>
  </Route>
  )

  export default NailArt
