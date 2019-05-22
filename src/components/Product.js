import React from 'react'
import PropTypes from 'prop-types';
import '../App.css';

const Product = ({ price, title, image, description, quantity, className }) => (
  <div className={className}>
    <span><img className="product-image" src={image} alt={title}/></span>
    <span className="product-title">{title} </span>
    <span className="product-price">{price} EUR</span>
    <span className="product-quantity">Qnty: {quantity ? ` x ${quantity}` : null}</span>
    <div class="btn btn-primary tooltip">About the product
    <div class="top">
    {description}
        <i></i>
    </div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}

export default Product