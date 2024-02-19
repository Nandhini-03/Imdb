import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const rateDisplay = () => {
    setOpen(true);
  };

  const rateClose = () => {
    setOpen(false);
  };

  return (
    <AuthContext.Provider value={{ open, rateDisplay, rateClose }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
