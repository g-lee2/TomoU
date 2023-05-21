// import React, { useEffect, useState, createContext, useContext } from "react";
// import { AuthenticationContext } from "../authentication/authentication.context";

// export const SearchContext = createContext();

// export const SearchContextProvider = ({ children }) => {
//   const [attendees, setAttendees] = useState();
//   const { user } = useContext(AuthenticationContext);

//   useEffect(() => {
//         } catch (error) {
//           console.log("Error fetching data from Firestore:", error);
//         }
//       }
//       fetchData();
//     }
//   }, []);

//   return (
//     <SearchContext.Provider value={{ attendees, setAttendees }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };
