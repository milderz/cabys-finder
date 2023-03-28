import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./Styles/Button.styled";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Button = ({
  version,
  text,
  icon,
  color,
  handleFunction,
  mobileVersion,
}) => {
  return (
    <StyledButton
      version={version}
      onClick={handleFunction}
      color={color}
      mobileVersion={mobileVersion}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon === "faArrowRightFromBracket" && faArrowRightFromBracket}
        />
      )}
      <p>{text}</p>
    </StyledButton>
  );
};

export default Button;
