import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      onLogin();
    } else {
      alert("Invalid credentials. Use: admin / password");
    }
  };

  return (
    <div className="login-container">
      <div className="credentials-display">
        <div className="credential-item">
          <span className="credential-label">Username:</span>
          <span className="credential-value">admin</span>
        </div>
        <div className="credential-item">
          <span className="credential-label">Password:</span>
          <span className="credential-value">password</span>
        </div>
      </div>

      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <h1>Book Tracker</h1>
            <p>Welcome back! Please sign in to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <div className="login-footer">
            <p>Demo Application - Use credentials above</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
