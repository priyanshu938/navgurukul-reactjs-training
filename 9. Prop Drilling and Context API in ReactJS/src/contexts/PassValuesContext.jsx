import React, { createContext } from "react";

export const PassValuesContext = createContext();
const PassValuesContextProvider = ({ children }) => {
  const a = 3,
    b = 4,
    c = 5;
  return (
    <PassValuesContext.Provider value={{ a, b, c }}>
      {children}
    </PassValuesContext.Provider>
  );
};

export default PassValuesContextProvider;
