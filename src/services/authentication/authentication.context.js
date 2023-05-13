import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig, db } from "../../../firebase-config";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    console.log(db);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
