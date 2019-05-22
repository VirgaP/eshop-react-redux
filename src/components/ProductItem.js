import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../App.css'

const ProductItem = ({ product, handleAddToCart }) => (
  <div className="grid-item">
    <Product
      className="product-main"
      title={product.title}
      price={product.price}
      image={product.image}
      description={product.description}
      quantity={product.inventory} />
    <button
      className="button-main add-to-cart"
      onClick={handleAddToCart}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired
}

export default ProductItem
