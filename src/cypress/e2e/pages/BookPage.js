class BookSearchPage {
    visit() {
      cy.visit('http://localhost:3000/');
    }
  
    enterSearchText(text) {
      cy.get('#book-search-box').should('be.visible').type(text);
    }
  
    clickSearchButton() {
      cy.get('#search-now-button').click();
    }
  
    verifySearchResultsVisible() {
      cy.get('.search-results').find('ul').should('be.visible');
    }
  }
  
  export default new BookSearchPage();
  