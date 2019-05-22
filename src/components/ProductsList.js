import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div className="grid-container">{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
