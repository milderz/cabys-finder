import React from "react";
import Button from "./Button";
import { StyledContactBanner } from "./Styles/ContactBanner.styled";

const ContactBanner = () => {
  return (
    <StyledContactBanner>
      <div className="text-content">
        <h2 className="contact-banner-title">¿Tienes alguna duda?</h2>
        <p className="contact-banner-text">¡Contáctanos!</p>
      </div>
      <Button version="main" text="Contáctanos" color="accent" />
    </StyledContactBanner>
  );
};

export default ContactBanner;
