import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

 
// const App = () => (
//   <div>
//     <h2 className="main-title"><span className="logo-title">Quick & Easy</span> online grocery shopping</h2>
//     <hr/>
//     <ProductsContainer />
//     <hr/>
//     <CartContainer />
//     <div className="App">
//         <Widget />
//       </div>
//   </div>
// )

// export default App



class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to Quick & Easy chat! How may we help you today?");
  }

  handleNewUserMessage = (newMessage) => {
    const response = "Please hold."
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
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