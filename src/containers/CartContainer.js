import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout }) => (

  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} 
    handleRemoveFromCart={() => removeFromCart(1)}
    /> 

    // {products.map(product =>
    //   <ProductItem
    //     key={product.id}
    //     product={product}
    //     handleAddToCart={() => addToCart(product.id)} 
    //     handleRemoveFromCart={() => removeFromCart(product.id)}/>
    // )}
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
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout, removeFromCart }
)(CartContainer)
