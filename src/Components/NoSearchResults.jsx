import React from "react";
import { StyledNoSearchResults } from "./Styles/NoSearchResults.styled";

const NoSearchResults = ({ title, text, img, searchTerm }) => {
  return (
    <StyledNoSearchResults>
      <img
        className="no-results-img"
        src={img}
        alt="sin-resultados"
        height="60px"
      />
      <h2 className="no-results-title">{title}</h2>
      <p className="no-results-text">
        {text} <span>{searchTerm}</span>
      </p>
    </StyledNoSearchResults>
  );
};

export default NoSearchResults;
