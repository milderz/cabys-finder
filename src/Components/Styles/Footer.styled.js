import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.footerBackground};
  padding: 9.2rem 0 5.2rem 0;
  border-top: 0.1rem solid hsla(215, 20%, 81%);

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    /* text-align: center; */
    gap: 2.6rem;
  }

  .nav {
  }

  .nav-links {
    display: flex;
    gap: 2.6rem;
  }

  .nav-link {
    color: red;
  }

  .link {
    color: ${({ theme }) => theme.text};
  }

  .created-by {
    display: flex;
    gap: 0.8rem;
  }
  .created-by-text {
    color: ${({ theme }) => theme.text};
  }
  .created-by-link {
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
    text-decoration-color: transparent;

    :hover {
      text-decoration-color: ${({ theme }) => theme.accentColor};
      color: ${({ theme }) => theme.accentColor};
    }
  }

  filter: ${({ modalActive, profileMenuActive }) =>
    modalActive || profileMenuActive ? "brightness(0.45)" : "brightness(1)"};
`;
