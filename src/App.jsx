import {
  collection,
  setDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Styles/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes";
import Card from "./Components/Card";
import Container from "./Components/Container";
import HeaderContainer from "./Components/HeaderContainer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SearchStats from "./Components/SearchStats";
import { CardsContainer } from "./Components/Styles/CardsContainer";
import NoSearchResults from "./Components/NoSearchResults";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import SavedCodes from "./Components/SavedCodes";
import SavedCodeCard from "./Components/SavedCodeCard";
import Notification from "./Components/Notification";
import ContactForm from "./Components/ContactForm";
import { UserAuth } from "./Context/AuthContext";
import LoginSection from "./Components/LoginSection";
import ModalAlert from "./Components/ModalAlert";
import ContactBanner from "./Components/ContactBanner";

function App() {
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
  const [theme, setTheme] = useState("dark");
  const [eventQueue, setEventQueue] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [profileMenuActive, setProfileMenuActive] = useState(false);

  const API_URL_DESC = "https://api.hacienda.go.cr/fe/cabys?q=";
  const API_URL_CODE = "https://api.hacienda.go.cr/fe/cabys?codigo=";

  const { user, loadingUserData } = UserAuth();

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
    setTheme(localStorage.getItem("theme"));
  }, [savedCodes]);

  useEffect(() => {
    user?.displayName ? setUserLoggedIn(true) : setUserLoggedIn(false);
  }, [user]);

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

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
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
          userId: user?.email,
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

  const handleDeleteCode = async (id) => {
    console.log("handle delete");
    const deletedCode = userCodes.filter((code) => code.id !== id);
    setUserCodes(deletedCode);
    const notificationMessage = {
      type: "deleted",
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

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <div className="notification-container">
          {eventQueue.map((notification) => (
            <Notification type={notification.type} />
          ))}
        </div>
        <ModalAlert
          titleMessage="Inicia sesión"
          titleText="Inicia sesión para guardar tus códigos"
          handleModalActive={handleModalActive}
          modalActive={modalActive}
        />

        <HeaderContainer
          children={
            <>
              <Header
                navActive={navActive}
                setNavActive={setNavActive}
                profileMenuActive={profileMenuActive}
                setProfileMenuActive={setProfileMenuActive}
                themeToggler={themeToggler}
                theme={theme}
              />
            </>
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container
                  modalActive={modalActive}
                  profileMenuActive={profileMenuActive}
                  bgColor="primary"
                  children={
                    <>
                      <Hero
                        handleOnSubmit={handleOnSubmit}
                        setSearchTerm={setSearchTerm}
                      />
                    </>
                  }
                />
                <Container
                  bgColor="primary"
                  modalActive={modalActive}
                  profileMenuActive={profileMenuActive}
                  children={
                    <>
                      <SearchStats
                        searchResults={searchResults}
                        searchCode={searchCode}
                        searchDescription={searchDescription}
                      />
                      {loading ? (
                        <Loader />
                      ) : response.code === 400 ? (
                        <NoSearchResults
                          title="Sin resultados"
                          text="Intenta buscando por descripción o por número de código."
                          img="./lupa.png"
                        />
                      ) : response.cantidad === 0 && response.total === 0 ? (
                        <NoSearchResults
                          title="Sin resultados"
                          text="No hemos encontrado resultados para: "
                          img="./lupa-sin-resultados.png"
                          searchTerm={searchTerm}
                        />
                      ) : (
                        <CardsContainer>
                          {codes.map((code, index) => (
                            <Card
                              key={index}
                              description={code.descripcion}
                              code={code.codigo}
                              tax={code.impuesto}
                              categories={code.categorias}
                              handleSaveCode={handleSaveCode}
                              handleNotifications={handleNotifications}
                            />
                          ))}
                        </CardsContainer>
                      )}
                    </>
                  }
                />
                <ContactBanner />
              </>
            }
          />
          <Route
            path="/guardados"
            element={
              <>
                <Container
                  bgColor="primary"
                  profileMenuActive={profileMenuActive}
                >
                  <SavedCodes userCodes={userCodes} userLoggedIn={userLoggedIn}>
                    {loadingUserData ? (
                      <Loader />
                    ) : !userLoggedIn ? (
                      <LoginSection />
                    ) : userCodes.length === 0 ? (
                      <NoSearchResults
                        title="No hay códigos guardados"
                        text=" Los códigos que guardes aparecerán aquí"
                        img="./carpeta-de-archivos.png"
                      />
                    ) : (
                      <div className="saved-codes-container">
                        {userCodes.map((code) => (
                          <SavedCodeCard
                            key={code.id}
                            id={code.id}
                            code={code.code}
                            description={code.description}
                            tax={code.tax}
                            handleDeleteCode={handleDeleteCode}
                          />
                        ))}
                      </div>
                    )}
                  </SavedCodes>
                </Container>
                <ContactBanner />
              </>
            }
          />
          <Route
            path="/contacto"
            element={
              <>
                <Container
                  bgColor="primary"
                  profileMenuActive={profileMenuActive}
                >
                  <ContactForm />
                </Container>
              </>
            }
          />
        </Routes>
        <Footer profileMenuActive={profileMenuActive} />
      </Router>
    </ThemeProvider>
  );
}

export default App;

// 4721400000000
