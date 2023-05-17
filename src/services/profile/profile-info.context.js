import React, { useEffect, useState, createContext } from "react";
import { db, auth } from "../../../firebase-config";
import { doc as docs, getDoc } from "firebase/firestore";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [priorProfile, setPriorProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = docs(db, "userProfiles", auth.currentUser.uid);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setPriorProfile(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error fetching data from Firestore:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [priorProfile]);

  return (
    <ProfileContext.Provider value={{ priorProfile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};
