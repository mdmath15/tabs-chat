import styled, { css } from 'styled-components';

type ContainerProps = {
  isCurrentUser: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isCurrentUser }) => css`
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    background: ${isCurrentUser ? '#005C4B' : theme.colors.message};
    color: ${isCurrentUser ? theme.colors.message : theme.colors.text};
    padding: ${theme.spacing.small};
    border-radius: ${theme.radius.small};
    margin-bottom: ${theme.spacing.medium};
    box-shadow: ${theme.boxShadow.small};
    margin-left: ${isCurrentUser ? 'auto' : 0};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};
    justify-content: space-between;

    h3 {
      margin: 0;
      padding: 0;
      font-size: ${theme.fonts.size.small};
    }

    span {
      font-size: ${theme.fonts.size.xsmall};
      line-height: 1.6;
      margin-left: auto;
    }
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.medium};
    padding: 0;
    margin: 0;
  `}
`;
