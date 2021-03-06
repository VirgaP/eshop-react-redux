import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../App.css'
import CheckoutModal from './modal/CheckoutModal';

class Cart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        products: this.props
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.products !== prevState.products) {
        return { products: nextProps.products };
      }
      return null;
    }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  render() {
  const hasProducts = this.state.products.length > 0
  const nodes = hasProducts ? (
    this.state.products.map(product =>
      <div className="cart-item">
      <Product
        className="product-cart"
        image={product.image}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        />
      <button
      className="button-remove"
      onClick={this.props.handleRemoveFromCart}>Remove</button>
    </div>
    )
  ) : (
    <em>Your cart is empty.</em>
  )
  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      <div className="cart-container">{nodes}</div>
      <div className="cart-total">
        <span>TOTAL: {this.props.total} EUR</span>
      </div>
      <button className="button-main checkout" onClick={this.showModal}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
      <button className="button-main clear-cart" onClick={this.props.handleClearCart}
        disabled={hasProducts ? '' : 'disabled'}>
        Clear cart
      </button>
      {hasProducts
          ? <CheckoutModal 
            show={this.state.show} 
            hideModal={this.hideModal} 
            reset={this.props.onCheckoutClicked} 
            total={this.props.total} />
          : null
        }
    </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
}

export default Cart

