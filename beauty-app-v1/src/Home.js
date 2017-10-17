import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Home = () => (
  <Route>
  <div className="container">
    <Link to={"skincare"}>
      <CartItem itemTitle="Skin Care" price="$100" />
    </Link>
    <Link to={"nailart"}>
      <CartItem itemTitle="Nail Art" price="$150" />
    </Link>
    <Link to={"makeup"}>
      <CartItem itemTitle="Makeup" price="$200" />
    </Link>
  </div>
  </Route>
)

export default Home
