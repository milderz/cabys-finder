import styled from "styled-components";

export const StyledSavedCodeCard = styled.article`
  background-color: ${({ theme }) => theme.cardBackground};
  border: ${({ theme }) => theme.border};
  border-radius: 0.8rem;
  padding: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2.6rem;
  }

  .delete-code-btn {
    background: none;
    border: none;
    cursor: pointer;

    position: relative;
    ::after {
      content: "Eliminar código";
      position: absolute;
      top: -2.6rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.accentColor};
      color: ${({ theme }) => theme.textInverted};
      font-size: 1.2rem;
      font-weight: 700;
      padding: 0.4rem 0.8rem;
      width: max-content;
      visibility: hidden;
      opacity: 0;
      transition: all 0.2s ease 0.2s;
    }

    :hover::after {
      visibility: visible;
      opacity: 1;
      top: -3.6rem;
    }
    svg {
      height: 1.6rem;
      color: ${({ theme }) => theme.accentColor};
    }
  }

  .card-title {
    font-size: var(--text-sm);
    position: relative;

    ::after {
      content: "${({ description }) => description}";
      position: absolute;
      top: -2.6rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.accentColor};
      color: ${({ theme }) => theme.textInverted};
      font-size: 1.2rem;
      font-weight: 700;
      padding: 1.3rem;
      width: max-content;
      max-width: 45rem;
      border-radius: 0.8rem;
      visibility: hidden;
      opacity: 0;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
        rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
      transition: all 0.2s ease 0.2s;
      z-index: 2;
    }

    :hover::after {
      visibility: visible;
      opacity: 1;
      top: -3.6rem;
    }

    span {
      font-weight: 400;
    }
  }

  .card-text {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text};
    font-weight: 700;

    span {
      font-weight: 400;
    }
  }

  .code {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .copy-button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: var(--text-xs);
      position: relative;

      ::after {
        content: "Copiar código";
        position: absolute;
        top: -2.6rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.accentColor};
        color: ${({ theme }) => theme.textInverted};
        font-size: 1.2rem;
        font-weight: 700;
        padding: 0.4rem 0.8rem;
        width: max-content;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease 0.2s;
      }

      :hover::after {
        visibility: visible;
        opacity: 1;
        top: -3.6rem;
      }
      svg {
        margin-right: 0.6rem;
        height: 1.2rem;
        color: ${({ theme }) => theme.accentColor};
      }
    }
  }
`;
