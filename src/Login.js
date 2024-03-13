// Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'Jokes' && password === 'password123') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form autoComplete="on">
        <div className="input-group">
          <label htmlFor="username" className="form-label">Username: &nbsp; </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username" 
            placeholder="Type Jokes here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="form-label">Password: &nbsp;</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Type password here" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="button" className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
