import styled from "styled-components";

export const StyledColorModeButton = styled.button`
  height: 3.8rem;
  width: 3.8rem;
  background: var(--body);
  border-radius: 0.8rem;
  border: 0.2rem solid
    ${({ inputFocused }) =>
      inputFocused ? "var(--accent-color)" : "var(--input-border)"};
  cursor: pointer;
  transition: border 0.2s ease;
  svg {
    color: var(--text);
    height: 1.6rem;
  }

  :hover {
    background: var(--body);
    border: 0.2rem solid var(--accent-color);

    svg {
      color: var(--accent-color);
    }
  }
`;
