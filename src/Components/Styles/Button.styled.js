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

  background-color: ${({ theme, color }) =>
    color === "accent"
      ? "var(--accent-color)"
      : color === "white"
      ? theme.text
      : color === "black"
      ? theme.body
      : "none"};
  color: var(--text-inverted);
  transition: background-color 0.2s ease;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.accentOpacity};
    cursor: pointer;
  }

  svg {
    padding-right: 1.2rem;
  }
`;
