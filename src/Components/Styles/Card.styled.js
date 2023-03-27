import styled from "styled-components";

export const StyledCard = styled.article`
  border: var(--border);
  border-radius: 0.8rem;
  padding: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  background-color: var(--card-background);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

  .card-content {
    width: 100%;
    display: flex;
    gap: 2.6rem;
    justify-content: space-between;
    margin: 0;
  }

  .content-left {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  .description {
    font-size: var(--text-sm);
    color: var(--text);

    span {
      font-weight: 400;
      color: var(--text);
    }

    @media screen and (max-width: 768px) {
      font-size: var(--text-sm);
    }
  }

  .card-text {
    font-size: var(--text-sm);
    color: var(--text);
    font-weight: 600;

    span {
      font-weight: 400;
      color: var(--text);
    }
  }
  .code {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .copy-button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: var(--text-xs);
      position: relative;

      ::after {
        content: "Copiar código";
        position: absolute;
        top: -2.6rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--accent-color);
        color: var(--text-inverted);
        font-size: 1.2rem;
        font-weight: 700;
        padding: 0.4rem 0.8rem;
        width: max-content;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease 0.2s;
      }

      :hover::after {
        visibility: visible;
        opacity: 1;
        top: -3.6rem;
      }
      svg {
        margin-right: 0.6rem;
        height: 1.2rem;
        color: var(--accent-color);
      }
    }
  }

  .show-categories-button {
    font-size: var(--text-sm);
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 0 2.4rem 0;
    color: var(--text);

    svg {
      color: var(--accent-color);
      margin-left: 0.8rem;
      transition: transform 0.4s ease;
    }
  }

  .tags-container {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;

    .tag {
      font-size: 1.2rem;
      background-color: var(--accent-color);
      padding: 0.4rem 1.2rem;
      border-radius: 10rem;
      color: var(--text-inverted);
      min-width: fit-content;
      font-weight: 800;
    }
  }

  .save-code-btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: relative;

    svg {
      height: 1.6rem;
      color: var(--accent-color);
    }

    ::after {
      content: "Guardar código";
      position: absolute;
      top: -2.6rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--accent-color);
      color: var(--text-inverted);
      font-size: 1.2rem;
      font-weight: 700;
      padding: 0.4rem 0.8rem;
      width: max-content;
      visibility: hidden;
      opacity: 0;
      transition: all 0.2s ease 0.2s;
    }

    :hover::after {
      visibility: visible;
      opacity: 1;
      top: -3.6rem;
    }
  }

  .rotate {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 375px) {
    gap: 1.2rem;
    padding: 1.2rem;

    .content-left {
      gap: 1.2rem;
    }
  }
`;
