import styled from "styled-components";

export const StyledButton = styled.button`
  height: ${({ version }) =>
    version === "main"
      ? "4.8rem"
      : version === "main-small"
      ? "3.8rem"
      : "auto"};
  border: none;
  padding: 0 2rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  font-weight: 500;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) =>
    color === "accent"
      ? "var(--accent-color)"
      : color === "white"
      ? "var(--text)"
      : color === "black"
      ? "var(--body)"
      : "none"};
  color: var(--text-inverted);
  transition: background-color 0.2s ease;
  cursor: pointer;

  :hover {
    background-color: var(--accent-opacity);
    cursor: pointer;
  }

  svg {
    padding-right: 1.2rem;

    @media screen and (max-width: 630px) {
      padding-right: ${({ mobileVersion }) => (mobileVersion ? "0" : "1.2rem")};
    }
  }

  p {
    @media screen and (max-width: 630px) {
      display: ${({ mobileVersion }) => (mobileVersion ? "none" : "block")};
    }
  }
`;
