import { StyledContainer } from "./Styles/Container.styled";

const Container = ({
  bgImg,
  bgColor,
  children,
  modalActive,
  profileMenuActive,
}) => {
  return (
    <StyledContainer
      bgColor={bgColor}
      bgImg={bgImg}
      modalActive={modalActive}
      profileMenuActive={profileMenuActive}
    >
      <div className="content">{children}</div>
    </StyledContainer>
  );
};

export default Container;
