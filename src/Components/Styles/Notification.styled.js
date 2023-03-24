import styled from "styled-components";

export const StyledNotification = styled.article`
  opacity: 0;
  height: 8.2rem;
  background-color: ${({ type }) =>
    type === "deleted"
      ? "var(--red)"
      : type === "saved"
      ? "var(--green)"
      : type === "codeCopied"
      ? "var(--blue)"
      : type === "duplicatedSavedCode"
      ? "var(--yellow)"
      : null};

  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2.6rem;
  padding: 0 2.6rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  width: fit-content;
  animation: fadeIn 5s ease;

  .notification-icon {
    width: 4.1rem;
    height: 4.1rem;

    background-color: ${({ type }) =>
      type === "duplicatedSavedCode"
        ? "hsla(0, 1%, 34%, 0.25)"
        : "hsla(0, 0%, 100%, 0.25)"};
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  .notification-text-action {
    font-size: var(--text-sm);
    font-weight: 600;
    color: ${({ type }) =>
      type === "duplicatedSavedCode" ? "var(--black)" : "var(--white)"};
  }

  .notification-close-button {
    cursor: pointer;
    background: none;
    border: none;
  }

  svg {
    color: ${({ type }) =>
      type === "duplicatedSavedCode" ? "var(--black)" : "var(--white)"};
    height: 1.6rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    10% {
      opacity: 1;
      transform: translateX(0);
    }
    90% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
