import styled from "styled-components";

export const StyledModalAlert = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid #9da1aa75;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  z-index: 1;
  visibility: ${({ modalActive }) => (modalActive ? "visible" : "hidden")};
  opacity: ${({ modalActive }) => (modalActive ? "1" : "0")};
  transition: opacity 0.2s ease;

  .modal-alert-text-content {
    text-align: center;
  }

  .modal-alert-title {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text};
  }
  .modal-alert-text {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text};
  }

  .close-modal-button {
    display: grid;
    place-items: center;
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    height: 3.4rem;
    width: 3.4rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease;

    svg {
      height: 2.2rem;
      color: ${({ theme }) => theme.accentColor};
    }

    :hover {
      background-color: ${({ theme }) => theme.body};
    }
  }

  .no-logged-img {
    filter: ${({ theme }) => theme.filter};
  }
`;
