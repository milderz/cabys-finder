import styled from "styled-components";

export const StyledContactForm = styled.section`
  display: flex;
  gap: 5.2rem;
  padding: 2.6rem 0;
  min-height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .contact-form {
    background-color: var(--background);
    flex: 1.2;
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    padding: 2.6rem 2.6rem;
    height: fit-content;
    border-radius: 0.8rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

    @media screen and (max-width: 768px) {
      flex: 1;
    }
  }

  .contact-form-label {
    width: 100%;
    height: 4.8rem;
    display: block;
  }
  .contact-form-label-textarea {
    width: 100%;
    height: 16.4rem;
    display: block;
  }

  .contact-form-textarea {
    border: 2px solid transparent;
    background-color: var(--body);
    font-size: var(--text-sm);
    color: var(--text);
    padding: 1.6rem 0 0 1.6rem;
    border-radius: 0.8rem;
    width: 100%;
    height: 100%;
    resize: none;

    transition: border 0.2s ease;

    ::placeholder {
      color: var(--text);
    }
    :focus {
      border: 2px solid var(--accent-color);
      outline: none;
    }
  }
  .contact-form-input {
    height: 100%;
    width: 100%;
    border: 2px solid transparent;
    background-color: var(--body);
    font-size: var(--text-sm);
    color: var(--text);
    padding-left: 1.6rem;
    border-radius: 0.8rem;
    transition: border 0.2s ease;

    ::placeholder {
      color: var(--text);
    }

    :focus {
      border: 2px solid var(--accent-color);
      outline: none;
    }
  }

  button {
    width: 100%;
  }

  .contact-information {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
  }

  .contact-link {
    display: flex;
    font-size: var(--text-sm);
    place-items: center;
    padding: 1rem 0 1rem 2rem;
    border-radius: 0.8rem;
    width: 35rem;
    background-color: transparent;
    border: 2px solid transparent;
    color: ${({ theme }) => theme.text};
    transition: border 0.2s ease;
    svg {
      padding-right: 1.6rem;
      color: ${({ theme }) => theme.accentColor};
    }

    :hover {
      border: 2px solid ${({ theme }) => theme.accentColor};
      background-color: ${({ theme }) => theme.background};
    }
  }
`;
