import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth();
    }
  }, []);

  return (
    <div className="container-fluid">
      <NavBar isLoggedIn={isLoggedIn} handleAuth={handleAuth} />
    </div>
  );
};

export default App;
