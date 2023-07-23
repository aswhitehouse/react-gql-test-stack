import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_BOOKS_QUERY } from '../../src/api';
import BookSearch from '../../src/BookSearch';
import '@testing-library/jest-dom/extend-expect';

const mocks = [
  {
    request: {
      query: GET_BOOKS_QUERY,
    },
    result: {
      data: {
        books: [
          { id: '1', title: 'Harry Potter & The Chamber Of Secrets', author: 'JK Rowling' },
          { id: '2', title: 'Lord Of The Rings', author: 'JR Tolkien' },
          { id: '3', title: 'Little Red Riding Hood', author: 'Charles Perrault' },
        ],
      },
    },
  },
];

test('renders search box correctly', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <BookSearch />
    </MockedProvider>
  );

  // Assert that the search box is rendered
  const searchBox = screen.getByRole('textbox', { name: /search/i, label: 'search-box' });
  expect(searchBox).toBeInTheDocument();
});
