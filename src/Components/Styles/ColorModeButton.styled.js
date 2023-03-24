import styled from "styled-components";

export const StyledColorModeButton = styled.button`
  height: 3.8rem;
  width: 3.8rem;
  background: ${({ theme }) => theme.body};
  border-radius: 0.8rem;
  border: ${({ theme }) => theme.border};
  cursor: pointer;
  transition: border 0.2s ease;
  svg {
    color: ${({ theme }) => theme.text};
    height: 1.6rem;
  }

  :hover {
    background: ${({ theme }) => theme.body};
    border: 0.1rem solid ${({ theme }) => theme.accentColor};

    svg {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;
