import React from "react";
import Button from "./Button";
import { StyledContactForm } from "./Styles/ContactForm.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div className="contact-information">
        <h2>Información de contacto</h2>

        <a className="contact-link" href="/">
          <FontAwesomeIcon icon={faWhatsapp} />
          WhatsApp
        </a>
        <a className="contact-link" href="/">
          <FontAwesomeIcon icon={faEnvelope} />
          Correo electrónico
        </a>
      </div>
      <form className="contact-form" action="submit">
        <h2>Envíanos un mensaje!</h2>
        <label className="contact-form-label">
          <input
            className="contact-form-input"
            type="text"
            placeholder="Ingresa tu nombre"
          />
        </label>
        <label className="contact-form-label">
          <input
            className="contact-form-input"
            type="email"
            placeholder="Ingresa tu email"
          />
        </label>
        <label className="contact-form-label-textarea">
          <textarea
            className="contact-form-textarea"
            placeholder="¿Cómo te podemos ayudar?"
          />
        </label>
        <Button text="Enviar" version="main" color="accent" />
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
