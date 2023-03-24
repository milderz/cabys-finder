import React from "react";
import { StyledNotification } from "./Styles/Notification.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faTrash,
  faTimes,
  faCopy,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Notification = ({ type }) => {
  return (
    <StyledNotification type={type}>
      <div className="notification-icon">
        <FontAwesomeIcon
          icon={
            type === "deleted"
              ? faTrash
              : type === "saved"
              ? faBookmark
              : type === "codeCopied"
              ? faCopy
              : type === "duplicatedSavedCode"
              ? faTriangleExclamation
              : null
          }
        />
      </div>
      <div className="notification-text">
        <p className="notification-text-action">
          {type === "deleted"
            ? "Código eliminado"
            : type === "saved"
            ? "Código guardado"
            : type === "codeCopied"
            ? "Código copiado al portapapeles"
            : type === "duplicatedSavedCode"
            ? "Ya has guardado este código"
            : null}
        </p>
      </div>
      <button className="notification-close-button">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </StyledNotification>
  );
};

export default Notification;
