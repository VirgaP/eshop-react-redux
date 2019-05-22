import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../App.css'

const Cart  = ({ products, total, onCheckoutClicked, handleRemoveFromCart }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="cart-item">
      <Product
        className="product-cart"
        image={product.image}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}/>
      <button
      className="button-remove"
      onClick={handleRemoveFromCart}>Remove from cart
    </button>
    </div>
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className="cart-container">{nodes}</div>
      <div className="cart-total">
        <span>TOTAL: {total} EUR</span>
      </div>
      <button className="button-main checkout" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  handleRemoveFromCart: PropTypes.func
}

export default Cart
