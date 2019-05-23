import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to Quick & Easy chat! ");
  }

  handleNewUserMessage = (newMessage) => {
    const response = "How may we help you today?"
    addResponseMessage(response);
  }

  render() {
    return (
      <div>
        <h2 className="main-title"><span className="logo-title">Quick & Easy</span> online grocery shopping</h2>
        <hr/>
        <ProductsContainer />
        <hr/>
        <CartContainer />
        <div className="App">
          <Widget handleNewUserMessage={this.handleNewUserMessage}/>
        </div>
      </div>
    );
  } 
}

export default App;