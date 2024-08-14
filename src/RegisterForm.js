import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';

const RegisterForm = ({ onBackToLogin }) => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    role: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(false);

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordMatch(formData.password === value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      if (response.status === 201) {
        alert('User registered successfully');
        onBackToLogin();
      } else {
        alert('Error registering user');
      }
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div className="maincontainer">
      <div className="container">
        <div className="photo_container">
          <img src="iPhone Wallpaper.6.png" alt="Profile" />
        </div>
        <div className="form_main">
          <h2 className="heading">Register</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="userId">
               <h2 className="title">User Id</h2>
                <input
                  className="input"
                  type="text"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="Enter your User ID" 
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
              <h2 className="title">Password</h2>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">
              <h2 className="title">Confirm Password</h2>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="input"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your Password"
                  required
                />
                {passwordMatch && formData.confirmPassword && (
                  <span className="tick">&#10004;</span> // Green tick icon
                )}
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="role">
              <h2 className="title">Role</h2>
                <select
                  id="role"
                  name="role"s
                  className="input"
                  value={formData.role}
                  onChange={handleChange}
                   placeholder="Select your Role"
                >
                  <option value="" disabled>Select your Role</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="TESTER">TESTER</option>
                  <option value="Viewer">VIEWER</option>
                </select>
              </label>
            </div>
            <button type="submit" className="submit">Register</button>
            <button type="button" className="submit" onClick={onBackToLogin}>Back to Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
