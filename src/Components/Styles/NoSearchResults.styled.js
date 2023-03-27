import styled from "styled-components";

export const StyledNoSearchResults = styled.section`
  height: 50vh;
  padding-top: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
  text-align: center;
  .no-results-img {
    filter: var(--filter);
  }
  .no-results-title {
    font-size: var(--text-md);
    color: var(--text);
  }

  .no-results-text {
    color: var(--text);

    span {
      color: var(--accent-color);
      font-weight: 600;
    }
  }
`;
