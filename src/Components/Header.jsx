import { StyledHeader } from "./Styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookmark,
  faCommentDots,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
// import ToggleSwitch from "./ToggleSwitch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import Button from "./Button";
import ColorModeButton from "./ColorModeButton";

const Header = ({
  themeToggler,
  theme,
  navActive,
  setNavActive,
  profileMenuActive,
  setProfileMenuActive,
}) => {
  const [darkModeToggle, setDarkModeToggle] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState();

  const { googleSignIn, user, logOut, loadingUserData } = UserAuth();

  useEffect(() => {
    user?.displayName && setUserLoggedIn(true);
  }, [user]);

  const handleNavActive = () => {
    setNavActive(!navActive);
  };
  const handleDarkModeToggle = () => {
    setDarkModeToggle(!darkModeToggle);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      setProfileMenuActive(!profileMenuActive);
      setUserLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileMenuActive = () => {
    setProfileMenuActive(!profileMenuActive);
  };

  return (
    <StyledHeader navActive={navActive} profileMenuActive={profileMenuActive}>
      <div
        className={`${navActive && "is-active"} hamburger`}
        id="hamburger-1"
        onClick={handleNavActive}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="logo">
        <Link to="/">
          <img
            src="carpetalupa.png"
            height="32px"
            alt="cabys-logo-main-header"
          />
          <h2 className="logo-title">Buscador CABYS</h2>
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-link">
            <Link className="link" to="/">
              <FontAwesomeIcon icon={faHome} />
              Inicio
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="guardados">
              <FontAwesomeIcon icon={faBookmark} />
              Guardados
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/contacto">
              <FontAwesomeIcon icon={faCommentDots} />
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav-btns-container">
        <ColorModeButton
          handleDarkModeToggle={handleDarkModeToggle}
          themeToggler={themeToggler}
          theme={theme}
        />
        {loadingUserData && <div className="loading-user"></div>}

        {userLoggedIn && (
          <div className="user-avatar">
            <button
              className="user-avatar-button"
              onClick={handleProfileMenuActive}
            >
              <img
                className="avatar-image"
                src={user?.photoURL}
                alt="avatar-profile"
                height="32px"
              />
            </button>
            <div className="user-menu">
              <header className="user-menu-header">
                <img
                  className="avatar-image-header"
                  src={user.photoURL}
                  alt="avatar-profile"
                  height="32px"
                />
                <p className="user-name">{user?.displayName}</p>
                <p className="user-email">{user?.email}</p>
              </header>
              <footer className="user-menu-footer">
                <button className="sign-out-button" onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} /> Cerrar
                  sesión
                </button>
              </footer>
            </div>
          </div>
        )}
        {userLoggedIn === false && (
          <Button
            version="main-small"
            color="accent"
            text="Iniciar sesión"
            icon="faArrowRightFromBracket"
            handleFunction={handleGoogleSignIn}
          />
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
