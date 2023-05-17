import React, { useEffect, useState, createContext } from "react";

import { db, auth } from "../../../firebase-config";
import { doc as docs, getDoc } from "firebase/firestore";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [priorProfile, setPriorProfile] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = docs(db, "userProfiles", auth.currentUser.uid);
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
  }, []);

  return (
    <ProfileContext.Provider value={{ priorProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
