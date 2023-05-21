import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [attendees, setAttendees] = useState();
  const { user } = useContext(AuthenticationContext);
  const [isStudent, setIsStudent] = useState(false);

  return (
    <SearchContext.Provider
      value={{ attendees, setAttendees, isStudent, setIsStudent }}
    >
      {children}
    </SearchContext.Provider>
  );
};
