import {
  collection,
  setDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { UserAuth } from "../Context/AuthContext";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);
  const [savedCodes, setSavedCodes] = useState(() => {
    const codes = JSON.parse(localStorage.getItem("codes"));
    return codes || [];
  });
  const [userCodes, setUserCodes] = useState([]);
  const [response, setResponse] = useState({});
  const [searchResults, setsearchResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [searchDescription, setSearchDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventQueue, setEventQueue] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [profileMenuActive, setProfileMenuActive] = useState(false);

  const API_URL_DESC = "https://api.hacienda.go.cr/fe/cabys?q=";
  const API_URL_CODE = "https://api.hacienda.go.cr/fe/cabys?codigo=";

  useEffect(() => {
    const fetchCodes = async () => {
      const querySnapshot = await getDocs(collection(db, "codes"));
      const userFetchedCodesFromFirestore = [];
      querySnapshot.forEach((doc) => {
        userFetchedCodesFromFirestore.push({ ...doc.data() });
      });

      setUserCodes(userFetchedCodesFromFirestore);
    };

    fetchCodes();
  }, []);

  useEffect(() => {
    const fetchCabys = async (url) => {
      try {
        setLoading(true);
        const res = await fetch(url + searchCode);
        const data = await res.json();
        setResponse(data);
        setCodes(data);
        setsearchResults(data.length);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCabys(API_URL_CODE);
  }, [searchCode]);

  useEffect(() => {
    const fetchCabys = async (url) => {
      try {
        setLoading(true);
        const res = await fetch(url + searchDescription);
        const data = await res.json();
        setResponse(data);
        setCodes(data.cabys);
        setsearchResults(data.total);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCabys(API_URL_DESC);
  }, [searchDescription]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (isNaN(searchTerm)) {
      setSearchDescription(searchTerm);
    } else {
      setSearchCode(searchTerm);
    }
  };

  const handleDeleteCode = async (id) => {
    const deletedCode = userCodes.filter((code) => code.id !== id);
    setUserCodes(deletedCode);
    const notificationMessage = {
      type: "deleted",
      id: uuidv4(),
    };

    await deleteDoc(doc(db, "codes", id));

    handleNotifications(notificationMessage);
  };

  const handleNotifications = (message) => {
    setEventQueue([...eventQueue, message]);
    setTimeout(() => {
      setEventQueue((prev) => prev.slice(1));
    }, 5000);
  };

  const handleModalActive = () => {
    setModalActive(!modalActive);
  };

  const handleSaveCode = async (description, code, tax) => {
    if (userLoggedIn) {
      const codeAlreadySaved = userCodes.some(
        (code) => code.description === description
      );

      if (!codeAlreadySaved) {
        let newCodeId = uuidv4();
        let newCode = {
          id: newCodeId,
          description,
          code,
          tax,
          userId: userId,
        };
        setSavedCodes([...savedCodes, newCode]);
        setUserCodes([...userCodes, newCode]);
        const notificationMessage = {
          type: "saved",
        };

        await setDoc(doc(db, "codes", newCodeId), newCode);

        handleNotifications(notificationMessage);
        return;
      }

      const notificationMessage = {
        type: "duplicatedSavedCode",
      };

      handleNotifications(notificationMessage);
    } else {
      setModalActive(true);
    }
  };

  const { user } = UserAuth();

  useEffect(() => {
    user && setUserLoggedIn(true);
    user && setUserId(user.email);
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        eventQueue,
        handleModalActive,
        modalActive,
        navActive,
        setNavActive,
        profileMenuActive,
        setProfileMenuActive,
        handleOnSubmit,
        setSearchTerm,
        searchResults,
        searchCode,
        searchDescription,
        loading,
        response,
        codes,
        userCodes,
        handleNotifications,
        handleDeleteCode,
        searchTerm,
        handleSaveCode,
        userLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
