import BookSearchPage from './pages/BookPage';
import data from './data-config';

describe('Navigate to the BookSearch page', () => {
  beforeEach(() => {
    BookSearchPage.visit();
  });

  it('Validates the search function is working', () => {
    BookSearchPage.enterSearchText(data.bookPageUrl);
    BookSearchPage.clickSearchButton();
    BookSearchPage.verifySearchResultsVisible();
  });
});
