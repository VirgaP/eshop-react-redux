it('can drive app by dispatching actions', () => {
    cy.visit('/')
    // dispatch Redux action
    cy
    .window()
    .its('store')
    .invoke('dispatch', { type: 'ADD_TO_CART', productId: 1 })
    // check if the app has updated its UI
    cy.get('.cart-item div').should('have.length', 3).contains(1)
  })