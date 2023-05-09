import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase-config";

const auth = getAuth(app);

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
