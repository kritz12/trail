import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin, onShowRegister }) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userID && password) {
      onLogin();
    } else {
      alert('Please enter User ID and password.');
    }
  };

  return (
    <div className="maincontainer"> 
    <div className="container">
      <div className="photo_container">
        <img src="IPhone Wallpaper.6.png" alt="" />
      </div>
      <div className="form_main">
        <h2 className="heading">Login</h2>
        <div className="inputContainer">
          <input    
            type="text"
            placeholder="User ID"
            className="inputField"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Password"
            className="inputField"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleLogin}>Submit</button>
        <button className="button">SSO Login</button>
        
        <p className="signup-link">
          Don't have an account? <button onClick={onShowRegister} className="signup-button">Sign Up</button>
        </p>
      </div>
      
    </div>
    </div>
  );
};

export default LoginPage;
