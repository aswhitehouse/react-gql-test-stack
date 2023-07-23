/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import BookSearch from './BookSearch';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Render the BookSearch component */}
        <BookSearch />
        <Routes>
          {/* Your existing routes and components go here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
