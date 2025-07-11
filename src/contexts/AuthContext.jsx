import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedInUser = localStorage.getItem('wanzofc_auth');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  // MOCK LOGIN
  const login = (username, password) => {
    // In a real app, you'd call an API. Here, we'll use mock credentials.
    if (username === 'wanzofc' && password === 'Plerr4321') {
      const userData = { username: 'wanzofc', role: 'admin' };
      localStorage.setItem('wanzofc_auth', JSON.stringify(userData));
      setUser(userData);
    } else {
      throw new Error('username atau password salah!');
    }
  };

  // MOCK LOGOUT
  const logout = () => {
    localStorage.removeItem('wanzofc_auth');
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};