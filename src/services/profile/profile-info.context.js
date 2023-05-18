import React, { useEffect, useState, createContext, useContext } from "react";
import { db, auth } from "../../../firebase-config";
import { doc as docs, getDoc } from "firebase/firestore";
import { AuthenticationContext } from "../authentication/authentication.context";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [priorProfile, setPriorProfile] = useState();
  const { user, isLoading } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user) {
      async function fetchData() {
        try {
          const docRef = docs(db, "userProfiles", user.uid);
          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setPriorProfile(data);
          }
        } catch (error) {
          console.log("Error fetching data from Firestore:", error);
        }
      }
      fetchData();
    }
  }, [priorProfile, user]);

  return (
    <ProfileContext.Provider value={{ priorProfile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};
