import React from 'react'
import PropTypes from 'prop-types';
import '../App.css';

const Product = ({ price, quantity, title, image }) => (
  <div>
    <img className="product-image" src={image} alt={title}/> - {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product