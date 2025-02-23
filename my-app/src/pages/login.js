import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email.trim() && password.trim()) {
      localStorage.setItem('isLoggedIn', true); 
      alert(`Logged in as: ${email}`);
      navigate('/home'); 
    } else {
      alert('Please provide valid credentials!');
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='form-group'>
      <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> 
        </div>
        <div className='form-group'>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <button type="submit">Login</button>
        <a className='link' href='/register'>Don't have an account? Register</a>
      </form>
    </div>
  );
}

export default Login;