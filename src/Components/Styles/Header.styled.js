import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 8.3rem;
  display: grid;
  align-items: center;

  grid-template-columns: repeat(3, 1fr);
  border-bottom: var(--border);

  .loading-user {
    height: 3.2rem;
    width: 3.2rem;
    background-color: var(--body-secondary);

    border-radius: 50%;
  }

  .nav-btns-container {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1.3rem;
  }

  .logo {
    a {
      display: flex;
      align-items: center;

      gap: 1.3rem;

      @media screen and (max-width: 575px) {
        justify-content: center;
      }
    }
    img {
      filter: var(--filter);
    }
    .logo-title {
      font-size: var(--text-sm);
      width: max-content;

      @media screen and (max-width: 575px) {
        display: none;
      }
    }
  }

  .nav {
    display: flex;
    justify-content: center;
    .nav-links {
      display: flex;
      gap: 3.2rem;
      padding: 0 0 0 2rem;

      .nav-link {
        display: flex;
        align-items: center;
        justify-content: center;
        .link {
          font-weight: 500;
          font-size: var(--text-sm);
          color: var(--text);

          :hover {
            color: var(--accent-color);

            svg {
              color: var(--accent-color);
            }
          }

          svg {
            margin-right: 1.4rem;
          }
        }

        svg {
          height: 1.6rem;
          color: var(--text);
          display: none;
          @media screen and (max-width: 900px) {
            display: inline-block;
          }
        }
      }

      .nav-link-toggle {
        svg {
          display: block;
        }
      }
    }
    @media screen and (max-width: 900px) {
      visibility: ${({ navActive }) => (navActive ? "visible" : "hidden")};
      opacity: ${({ navActive }) => (navActive ? "1" : "0")};
      position: absolute;
      top: 8.3rem;
      left: 0;
      background-color: #2a2a29;
      width: 100%;
      height: 100vh;
      padding: 4rem 0 0 0;
      z-index: 1;
      transition: opacity 0.2s ease;

      .nav-links {
        flex-direction: column;
        height: 100%;
        align-items: flex-start;
        justify-content: start;
      }

      .nav-link {
        svg {
          color: hsl(250, 30%, 96%) !important;
        }
        .link {
          color: hsl(250, 30%, 96%) !important;

          svg {
            color: hsl(250, 30%, 96%) !important;
          }
        }
      }
    }
  }

  .user-avatar {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: end;

    @media screen and (max-width: 550px) {
      position: static;
    }
  }

  .avatar-image {
    border-radius: 50%;
  }

  .user-avatar-button {
    cursor: pointer;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: none;
    position: relative;
    z-index: 3;

    img {
      z-index: 3;
      position: relative;
    }
    ::after {
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      height: 3.8rem;
      width: 3.8rem;
      background-color: ${({ theme, profileMenuActive }) =>
        !profileMenuActive ? "var(--text)" : "var(--accent-color)"};
      z-index: 2;
      border-radius: 50%;
      transition: background-color 0.2s ease;
    }

    :hover::after {
      background-color: var(--accent-color);
    }
  }

  .user-menu {
    visibility: ${({ profileMenuActive }) =>
      profileMenuActive ? "visible" : "hidden"};
    opacity: ${({ profileMenuActive }) => (profileMenuActive ? "1" : "0")};
    position: absolute;
    right: 0;
    top: 7.8rem;
    width: 38.8rem;
    background-color: var(--background);
    border-radius: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 50px -12px;
    height: 30rem;
    display: flex;
    flex-direction: column;
    transition: opacity 0.2s ease;
    cursor: default;

    @media screen and (max-width: 550px) {
      width: 90%;
      top: 9.4rem;
      left: 50%;
      right: 0;
      transform: translate(-50%, 0);
    }
  }

  .user-menu-header {
    flex: 1;
    padding: 2.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    border-bottom: 1px solid #9da1aa75;
  }

  .user-email,
  .user-name {
    font-size: var(--text-sm);
    color: var(--text);
  }

  .avatar-image-header {
    border-radius: 50%;
    height: 100px;
  }
  .user-menu-footer {
    height: 5.2rem;
  }

  .sign-out-button {
    height: 100%;
    font-size: var(--text-sm);
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.2rem;
    background: transparent;
    border: none;
    border-radius: 0 0 0.8rem 0.8rem;
    cursor: pointer;

    svg {
      height: 1.8rem;
    }

    :hover {
      background-color: var(--accent-color);
      color: var(--text-inverted);
    }
  }

  .hamburger {
    display: none;
    transform: scale(0.6);
    transform-origin: left;
    .line {
      width: 4rem;
      height: 5px;
      background-color: var(--accent-color);
      display: block;
      margin: 8px 0;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    :hover {
      cursor: pointer;
    }
    @media screen and (max-width: 900px) {
      display: block;
    }
  }

  #hamburger-1.is-active .line:nth-child(2) {
    opacity: 0;
  }

  #hamburger-1.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  #hamburger-1.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }
`;
