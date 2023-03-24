import styled from "styled-components";

export const StyledSectionHeader = styled.header`
  padding: 2.6rem 0;
  display: flex;
  align-items: center;
  gap: 1.3rem;

  svg {
    height: 1.6rem;
    color: ${({ theme }) => theme.accentColor};
  }
`;
