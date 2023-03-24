import styled from "styled-components";

export const StyledLoginSection = styled.section`
  height: 50vh;
  padding-top: 4.2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.6rem;

  .no-logged-img {
    filter: ${({ theme }) => theme.filter};
  }
`;
