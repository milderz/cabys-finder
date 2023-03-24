import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { StyledSavedCodes } from "./Styles/SavedCodes.styled";

const SavedCodes = ({ userCodes, children }) => {
  return (
    <StyledSavedCodes userCodes={userCodes}>
      <header className="saved-codes-header">
        <h2 className="header-title">
          <FontAwesomeIcon icon={faBookmark} />
          Tus códigos guardados
        </h2>
        <label className="search-saved-codes">
          <input type="text" placeholder="Busca tus códigos guardados" />
        </label>
      </header>
      <div className="saved-codes-grid">{children}</div>
    </StyledSavedCodes>
  );
};

export default SavedCodes;
