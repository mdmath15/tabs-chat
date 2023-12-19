import styled, { css } from 'styled-components';

export const Container = styled.form`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
`;

export const TextField = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    border-radius: ${theme.radius.small};
    font-size: ${theme.fonts.size.medium};
    outline: none;
    border: none;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    border-radius: ${theme.radius.small};
    font-family: ${theme.fonts.family};
    background: transparent;
    color: ${theme.colors.text};

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  `}
`;
