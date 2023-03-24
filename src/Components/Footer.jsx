import React from "react";
import { StyledFooter } from "./Styles/Footer.styled";
import { Link } from "react-router-dom";

const Footer = ({ profileMenuActive }) => {
  return (
    <StyledFooter profileMenuActive={profileMenuActive}>
      <div className="footer-content">
        <div className="logo">
          <Link to="/">
            <h2>Buscador CABYS</h2>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-link">
              <Link className="link" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-link">
              <Link className="link" to="guardados">
                Guardados
              </Link>
            </li>
            <li className="nav-link">
              <a className="link" href="/contacto">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="created-by">
          <p className="created-by-text">Creado por:</p>
          <a
            className="created-by-link"
            href="https://milderz.com/"
            target="_blank"
            rel="noreferrer"
          >
            Milder Navarro
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
