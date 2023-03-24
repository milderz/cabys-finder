import { StyledSavedCodeCard } from "./Styles/SavedCodeCard.styled";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SavedCodeCard = ({ id, tax, code, description, handleDeleteCode }) => {
  return (
    <StyledSavedCodeCard className="saved-code-card" description={description}>
      <header className="card-header">
        <h3 className="card-title" style={{}}>
          Bien o servicio:{" "}
          {/* <span>{`${description.split("").splice(0, 68).join("")}...`}</span> */}
          <span>
            {description.length > 30
              ? `${description.split("").splice(0, 68).join("")}...`
              : description}
          </span>
        </h3>
        <button
          onClick={() => handleDeleteCode(id)}
          className="delete-code-btn"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </header>
      <p className="card-text">
        Impuesto: <span>{tax}%</span>
      </p>
      <div className="code">
        <p className="card-text">
          Código: <span>{code}</span>
        </p>
        <button className="copy-button">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </StyledSavedCodeCard>
  );
};

export default SavedCodeCard;
