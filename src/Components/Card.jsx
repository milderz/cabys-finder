import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faChevronDown,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { StyledCard } from "./Styles/Card.styled";
import { useState } from "react";

const Card = ({
  categories,
  description,
  code,
  tax,
  handleSaveCode,
  handleNotifications,
}) => {
  const [showCategories, setShowCategories] = useState(false);

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleCopyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);

    const notificationMessage = {
      type: "codeCopied",
    };

    handleNotifications(notificationMessage);
  };

  return (
    <StyledCard>
      <div className="card-content">
        <div className="content-left">
          <h4 className="description">
            Bien o servicio: <span>{description}</span>
          </h4>
          <p className="card-text">
            Impuesto: <span>{tax}%</span>{" "}
          </p>
          <div className="code">
            <p className="card-text">
              Código: <span>{code}</span>
            </p>
            <button
              className="copy-button"
              onClick={() => handleCopyCodeToClipboard(code)}
            >
              <FontAwesomeIcon icon={faCopy} />
              {/* Copiar */}
            </button>
          </div>
        </div>
        <div className="content-right">
          <button
            className="card-text save-code-btn"
            onClick={() => handleSaveCode(description, code, tax)}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>

      <div className="categories">
        <button
          onClick={handleShowCategories}
          className="show-categories-button"
        >
          {showCategories ? "Ocultar categorías" : "Mostrar categorías"}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${showCategories && "rotate"}`}
          />
        </button>
        {showCategories && (
          <div className="tags-container">
            {categories.map((category, index) => (
              <div key={index} className="tag">
                {category.split("").slice(0, 60).join("")}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledCard>
  );
};

export default Card;
