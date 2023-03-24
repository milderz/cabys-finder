import styled from "styled-components";

export const StyledHero = styled.main`
  height: 49rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.2rem;
  border-bottom: ${({ theme }) => theme.border};

  .hero-description {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.lightText};
    max-width: 82ch;

    span {
      color: ${({ theme }) => theme.accentColor};
      font-weight: 600;
    }
  }

  @media screen and (max-width: 425px) {
    text-align: center;
  }
`;
