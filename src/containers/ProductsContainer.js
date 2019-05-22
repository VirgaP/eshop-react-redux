import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addToCart, removeFromCart }) => (
  <ProductsList title="Our products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        handleAddToCart={() => addToCart(product.id)} 
        handleRemoveFromCart={() => removeFromCart(product.id)}/>
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
