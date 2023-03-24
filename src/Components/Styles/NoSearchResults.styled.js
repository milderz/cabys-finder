import styled from "styled-components";

export const StyledNoSearchResults = styled.section`
  height: 50vh;
  padding-top: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
  text-align: center;
  .no-results-img {
    filter: ${({ theme }) => theme.filter};
  }
  .no-results-title {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text};
  }

  .no-results-text {
    color: ${({ theme }) => theme.text};

    span {
      color: ${({ theme }) => theme.accentColor};
      font-weight: 600;
    }
  }
`;
