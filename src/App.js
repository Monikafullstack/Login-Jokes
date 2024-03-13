import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Homepage from './Homepage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {!loggedIn ? <Login onLogin={handleLogin} /> : <Homepage onLogout={handleLogout} />}
    </div>
  );
}

export default App;
