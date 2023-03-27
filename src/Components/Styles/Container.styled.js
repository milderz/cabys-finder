import styled from "styled-components";

export const StyledContainer = styled.section`
  background: ${({ bgColor }) =>
    bgColor === "primary" ? "var(--body)" : "var(--body-secondary)"};
  filter: ${({ modalActive, profileMenuActive }) =>
    modalActive || profileMenuActive ? "brightness(0.45)" : "brightness(1)"};
  pointer-events: ${({ modalActive, profileMenuActive }) =>
    modalActive || profileMenuActive ? "none" : "auto"};

  transition: filter 0.2s ease;
  .content {
    width: 84%;
    margin: auto;
    max-width: 121.7rem;

    @media screen and (max-width: 1280px) {
      width: 92%;
    }
  }
`;
