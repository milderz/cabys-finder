import styled from "styled-components";

export const StyledContactBanner = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15rem;
  width: 80%;
  margin: 5.2rem auto -5.2rem auto;
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.bannerImage};

  background-position: center;
  background-size: cover;
  border-radius: 1.6rem;
  max-width: 111rem;
  padding: 0 5.2rem;

  @media screen and (max-width: 710px) {
    height: 25rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2.6rem;
    padding: 0;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .contact-banner-title {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text};

    @media screen and (max-width: 710px) {
      font-size: var(--text-sm);
    }
  }

  .contact-banner-text {
    font-weight: 600;
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text};
  }
`;
