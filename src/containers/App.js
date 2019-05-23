import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Widget } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css'

 
const App = () => (
  <div>
    <h2 className="main-title"><span className="logo-title">Quick & Easy</span> online grocery shopping</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
    <div className="App">
        <Widget />
      </div>
  </div>
)

export default App