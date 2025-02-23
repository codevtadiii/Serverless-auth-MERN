import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the styles

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Simulate user registration logic
    alert(`Registered successfully!`);
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
      <div className="form-group">
      <label>Name:</label>
        <input
          type="text"
          name="name"

          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        /></div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <a className="link" href="/login">Already have an account? Login</a>
      </form>
    </div>
  );
}

export default Register;
