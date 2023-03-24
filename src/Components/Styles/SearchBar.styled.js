import styled from "styled-components";

export const StyledSearchBar = styled.form`
  height: 8rem;
  background-color: ${({ theme }) => theme.bodySecondary};
  padding: 0 1.9rem;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.2rem solid
    ${({ theme, inputFocused }) =>
      inputFocused ? theme.accentColor : theme.inputBorder};
  transition: border 0.2s ease;
  .search-icon {
    svg {
      height: 1.6rem;
      color: ${({ theme }) => theme.accentColor};
    }
    margin-right: 1.9rem;
  }
  #search {
    border: none;
    flex-grow: 1;
    color: ${({ theme }) => theme.text};
    font-size: var(--text-sm);
    caret-color: ${({ theme }) => theme.accentColor};
    background-color: ${({ theme }) => theme.bodySecondary};
    height: 100%;

    ::placeholder {
      color: #899199;
      font-size: var(--text-sm);
    }

    :focus {
      outline: none;
    }
  }

  .btns-container {
    display: flex;
    gap: 1.6rem;
  }

  @media screen and (max-width: 425px) {
    height: 4.8rem;
    position: relative;
    .btns-container {
      position: absolute;
      bottom: -6.8rem;
      left: 0;
      width: 100%;

      button {
        width: 100%;
      }
    }
  }
`;
