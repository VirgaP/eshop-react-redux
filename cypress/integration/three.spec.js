describe ('Button click test', () => {
    it ('Visit the app', () => {
      cy.visit ('/')
      cy.get('button').click({ multiple: true, force: true })
    });
  });

  