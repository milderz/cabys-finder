import styled from "styled-components";

export const StyledHero = styled.main`
  height: 49rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.2rem;
  border-bottom: var(--border);

  .hero-description {
    font-size: var(--text-sm);
    color: var(--light-text);
    max-width: 82ch;

    span {
      color: var(--accent-color);
      font-weight: 600;
    }
  }

  @media screen and (max-width: 425px) {
    text-align: center;
  }
`;
