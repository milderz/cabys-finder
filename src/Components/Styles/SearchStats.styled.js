import styled from "styled-components";

export const StyledSearchStats = styled.header`
  padding: 7.6rem 0 3.3rem 0;
  display: flex;
  justify-content: space-between;
  .search-results {
    font-size: var(--text-sm);
    font-weight: 600;
    color: ${({ theme }) => theme.text};

    span {
      color: ${({ theme }) => theme.accentColor};
    }
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;
    gap: 2.6rem;
  }

  @media screen and (max-width: 425px) {
    text-align: center;
  }
`;
