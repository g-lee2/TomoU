import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import { db, app, auth } from "../../../firebase-config";
import {
  getDoc,
  doc as docs,
  updateDoc,
  deleteField,
} from "firebase/firestore";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children, schoolId }) => {
  const [attendees, setAttendees] = useState();
  const { user } = useContext(AuthenticationContext);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const docRef = docs(db, "schools", schoolId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let data = docSnap.data();
        const { Address, Name, Image, Url, Region, ...allStudents } = data;
        setAttendees(allStudents);
      } else {
        console.log("No such document!");
      }
    }
    fetchData();
  }, [schoolId]);

  return (
    <SearchContext.Provider
      value={{ attendees, setAttendees, isStudent, setIsStudent }}
    >
      {children}
    </SearchContext.Provider>
  );
};
