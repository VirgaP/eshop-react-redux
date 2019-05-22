import React from 'react'
import PropTypes from 'prop-types';
import '../App.css';

const Product = ({ price, quantity, title, image, className }) => (
  <div className={className}>
    {/* <img className="product-image" src={image} alt={title}/> - {title} - &#36;{price}{quantity ? ` x ${quantity}` : null} */}
    <span><img className="product-image" src={image} alt={title}/></span>
    <span className="product-title">{title} </span>
    <span className="product-price">{price} EUR</span>
    <span className="product-quantity">Qnty: {quantity ? ` x ${quantity}` : null}</span>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product