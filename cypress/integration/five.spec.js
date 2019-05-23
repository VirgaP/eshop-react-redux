  describe ('Button click test', () => {
    it ('Open chat', () => {
      cy.visit ('/')
      cy.get('.rcw-launcher').click();
    });
  });