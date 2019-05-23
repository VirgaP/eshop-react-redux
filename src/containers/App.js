import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
 
const App = () => (
  <div>
    <h2 className="main-title"><span className="logo-title">Quick & Easy</span> online grocery shopping</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App