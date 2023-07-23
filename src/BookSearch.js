import React, { useState } from 'react';
import { getBooks } from './api';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await getBooks(searchTerm);
      setSearchResults(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="book-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter book title to search..."
        aria-label="search-box"
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>Search</button>
      <div className="search-results">
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((book) => (
            <li key={book.id}>
              <strong>Title:</strong> {book.title} <br />
              <strong>Author:</strong> {book.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const inputStyles = {
  padding: '8px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginRight: '8px',
};

const buttonStyles = {
  padding: '8px 16px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
  cursor: 'pointer',
};

export default BookSearch;
