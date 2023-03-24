import styled from "styled-components";

export const StyledSavedCodes = styled.section`
  .saved-codes-header {
    padding: 2.6rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-saved-codes {
    input {
      background-color: ${({ theme }) => theme.bodySecondary};
      border: none;
      height: 3.9rem;
      width: 30rem;
      border-radius: 0.8rem;
      border: 0.2rem solid ${({ theme }) => theme.inputBorder};
      transition: border 0.2s ease;
      outline: none;
      font-size: var(--text-sm);
      padding-left: 1.6rem;
      caret-color: ${({ theme }) => theme.accentColor};
      color: ${({ theme }) => theme.text};

      :focus {
        border: 0.2rem solid ${({ theme }) => theme.accentColor};
      }

      ::placeholder {
        color: #899199;
      }
    }
  }

  .header-title {
    display: flex;
    align-items: center;
    gap: 1.3rem;
    svg {
      height: 1.6rem;
      color: ${({ theme }) => theme.accentColor};
    }
  }
  .saved-codes-grid {
    min-height: 70vh;
  }

  .saved-codes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-auto-rows: 30rem;
    grid-gap: 2.6rem;
    padding: 2.6rem 0;
  }

  .no-results {
    display: block;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 0;
    min-height: 49.1rem;
  }
`;
