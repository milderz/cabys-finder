import styled from "styled-components";

export const StyledLoader = styled.section`
  height: 50vh;
  padding-top: 4.2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid ${({ theme }) => theme.accentColor};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
