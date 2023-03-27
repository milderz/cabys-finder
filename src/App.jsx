import {
  collection,
  setDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import { useState, useEffect } from "react";

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
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

import noResults from "./assets/lupa.png";
import noSearchResults from "./assets/lupa-sin-resultados.png";
import codesFolder from "./assets/carpeta-de-archivos.png";

function App() {
  const { user, loadingUserData } = UserAuth();

  const {
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
    userLoggedIn,
  } = useContext(AppContext);

  return (
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
                        img={noResults}
                      />
                    ) : response.cantidad === 0 && response.total === 0 ? (
                      <NoSearchResults
                        title="Sin resultados"
                        text="No hemos encontrado resultados para: "
                        img={noSearchResults}
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
                      img={codesFolder}
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
  );
}

export default App;

// 4721400000000
