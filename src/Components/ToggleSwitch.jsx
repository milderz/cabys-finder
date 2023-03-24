import { StyledToggleSwitch } from "./Styles/ToggleSwitch.styled";

const ToggleSwitch = ({ handleDarkModeToggle, themeToggler, theme }) => {
  return (
    <StyledToggleSwitch>
      <input
        type="checkbox"
        onChange={themeToggler}
        checked={theme === "dark" ? true : false}
      />
      <span className="slider" />
    </StyledToggleSwitch>
  );
};

export default ToggleSwitch;
