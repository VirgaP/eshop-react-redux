it('can drive app by dispatching actions open modal', () => {
    cy.visit('/')
    // dispatch Redux action
    cy
    .window()
    .its('store')
    .invoke('dispatch', { type: 'ADD_TO_CART', productId: 1 })
    cy.get('.cart-item div').should('have.length', 3).contains(1)
    cy.get('.checkout').click();
  })