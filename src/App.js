import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <BookList />
          <ThemeToggle />
        </div>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
