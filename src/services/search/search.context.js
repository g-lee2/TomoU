import React, { useEffect, useState, createContext, useContext } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [isStudent, setIsStudent] = useState(false);
  return (
    <SearchContext.Provider value={{ isStudent, setIsStudent }}>
      {children}
    </SearchContext.Provider>
  );
};
