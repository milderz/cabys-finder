import React from "react";
import { StyledSectionHeader } from "./Styles/SectionHeader.styled";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionHeader = () => {
  return (
    <StyledSectionHeader>
      <FontAwesomeIcon icon={faCommentDots} />
      <h2>Contáctanos</h2>
    </StyledSectionHeader>
  );
};

export default SectionHeader;
