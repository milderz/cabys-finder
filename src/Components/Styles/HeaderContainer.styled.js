import styled from "styled-components";

export const StyledHeaderContainer = styled.section`
  background: ${({ bgColor }) => bgColor && "var(--body)"};
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
