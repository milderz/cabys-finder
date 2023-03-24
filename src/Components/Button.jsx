import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./Styles/Button.styled";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Button = ({ version, text, icon, color, handleFunction }) => {
  return (
    <StyledButton version={version} onClick={handleFunction} color={color}>
      {icon && (
        <FontAwesomeIcon
          icon={icon === "faArrowRightFromBracket" && faArrowRightFromBracket}
        />
      )}

      {text}
    </StyledButton>
  );
};

export default Button;
