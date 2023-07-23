describe('Navigate to the BookSearch page', () => {
  it('Validates the search function is working', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#book-search-box').should('be.visible').type("Test123");
    cy.get('#search-now-button').click();
    cy.get('.search-results').find('ul').should('be.visible');
  })
})