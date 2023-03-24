import { StyledHeaderContainer } from "./Styles/HeaderContainer.styled";

const HeaderContainer = ({ bgColor, children }) => {
  return (
    <StyledHeaderContainer bgColor={bgColor}>
      <div className="content">{children}</div>
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
