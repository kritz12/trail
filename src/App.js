import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterForm from './RegisterForm';
import FormPage from './FormPage';
import './App.css';
import './fonts.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleBackToLogin = () => {
    setShowRegister(false);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {!loggedIn ? (
        !showRegister ? (
          <LoginPage onLogin={handleLogin} onShowRegister={handleShowRegister} />
        ) : (
          <RegisterForm onBackToLogin={handleBackToLogin} />
        )
      ) : (
        <FormPage />
      )}
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Turn to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
