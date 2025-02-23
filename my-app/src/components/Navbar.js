
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <a href='./home'><h2 className="navbar-logo">Unify</h2></a>
      <div className="navbar-links">
        <Link to="/home">
          <button>Home</button>
        </Link>
        
        <Link to="/about">
          <button>About Us</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
        
        <Link to="/register">
          <button>Register</button>
        </Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
