import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { StyledModalAlert } from "./Styles/ModalAlert.styled";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ModalAlert = ({
  titleMessage,
  titleText,
  handleGoogleSignIn,
  handleModalActive,
  modalActive,
}) => {
  return (
    <StyledModalAlert modalActive={modalActive}>
      <img
        className="no-logged-img"
        src="/padlock.png"
        alt="sin-resultados"
        height="60px"
      />
      <button onClick={handleModalActive} className="close-modal-button">
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className="modal-alert-text-content">
        <h3 className="modal-alert-title">{titleMessage}</h3>
        <p className="modal-alert-text">{titleText}</p>
      </div>

      <Button
        version="main-small"
        text="Iniciar sesión"
        icon="faArrowRightFromBracket"
        handleFunction={handleGoogleSignIn}
      />
    </StyledModalAlert>
  );
};

export default ModalAlert;
