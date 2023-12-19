import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute;
    right: 84px; */

    button {
      background: transparent;
      color: ${theme.colors.text};
    }
  `}
`;

export const EmojisList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 200px;
    width: 100%;
    max-width: 580px;
    flex-grow: 1;
    overflow-y: auto;
    gap: ${theme.spacing.medium};
    padding: ${theme.spacing.large};
    background: ${theme.colors.background};
    border-radius: ${theme.radius.medium};
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: ${theme.boxShadow.medium};

    @media (max-width: 600px) {
      width: 95%;
    }

    li {
      list-style: none;
      cursor: pointer;
    }
  `}
`;
