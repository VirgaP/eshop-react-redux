import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];
 
const App = () => (
  <div>
    <h2 className="main-title"><span className="logo-title">Quick & Easy</span> online grocery shopping</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
    <ChatBot steps={steps} />
  </div>
)

export default App