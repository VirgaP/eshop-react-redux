import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE,
    CLEAR_CART
  } from '../constants/ActionTypes'
  
  const initialState = {
    addedIds: [],
    quantityById: {}
  }
  
  const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        if (state.indexOf(action.productId) !== -1) {
          return state
        }
        return [ ...state, action.productId ]
      
        case REMOVE_FROM_CART:
        if (state.indexOf(action.productId) !== +1) {
          return state
        }
        return [ ...state, action.productId ]
      default:
        return state
    }
  }
  
  const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const { productId } = action
        return { ...state,
          [productId]: (state[productId] || 0) + 1
        }
      case REMOVE_FROM_CART:
        return { ...state,
          [productId]: (state[productId] || 0) - 1,
        }
      default:
        return state
    }
  }
  
  export const getQuantity = (state, productId) =>
    state.quantityById[productId] || 0
  
  export const getAddedIds = state => state.addedIds
  
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case CHECKOUT_REQUEST:
        return initialState
      case CLEAR_CART:
        return {
          addedIds: [],
          quantityById: []
        }
      case REMOVE_FROM_CART:
          const { productId } = action
          const filteredItems = state.addedIds.filter(function(item) {
            return item !== productId
          })
          return {
            addedIds: filteredItems,
            quantityById: []
          }           
      case CHECKOUT_FAILURE:
        return action.cart
      
      default:
        return {
          addedIds: addedIds(state.addedIds, action),
          quantityById: quantityById(state.quantityById, action)
        }
    }
  }
  
  export default cart
  