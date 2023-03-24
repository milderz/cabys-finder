import { StyledColorModeButton } from "./Styles/ColorModeButton.styled";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColorModeButton = ({ themeToggler, theme }) => {
  return (
    <StyledColorModeButton onClick={themeToggler}>
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </StyledColorModeButton>
  );
};

export default ColorModeButton;
