import React from 'react';
import './Login.css';
// import { useNavigate } from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom";


const Signup = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" required />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>
         <Link to="/login">Login Here</Link>
    </p>
    </div>
  );
};

export default Signup;
