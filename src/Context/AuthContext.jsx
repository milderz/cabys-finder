import { useContext, createContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";
import { useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [loadingUserData, setLoadingUserData] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    setLoadingUserData(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingUserData(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    user?.displayName ? setUserLoggedIn(true) : setUserLoggedIn(false);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        user,
        loadingUserData,
        setLoadingUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
