/* global test */
/* global expect */
/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom matchers
import BookSearch from '../src/BookSearch';

test('renders search box correctly', () => {
  render(<BookSearch />);

  const searchBox = screen.getByRole('textbox', { name: /search/i, label: 'search-box' });
  const searchButton = screen.getByRole('button', { name: /search/i });

  expect(searchBox).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
