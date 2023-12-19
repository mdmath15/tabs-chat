import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 600px;
    height: 95%;
    width: 100%;
    background: ${theme.colors.background};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.boxShadow.medium};
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
      border: none;
      border-radius: 0;
      width: 100%;
      height: 100%;
    }
  `}
`;
