import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, clearCart, removeFromCart } from '../actions'
import { getTotal, getCartProducts, getCartProduct } from '../reducers'
import Cart from '../components/Cart'
 
const CartContainer = ({ products, total, checkout, clearCart, removeFromCart, productId}) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} 
    handleClearCart={() => clearCart(products)}
    productId={productId}
    handleRemoveFromCart={() => removeFromCart(1)}
  /> 
)
CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  productId: getCartProduct(state)
})

export default connect(
  mapStateToProps,
  { checkout, clearCart, removeFromCart }
)(CartContainer)
