import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    min-height: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    gap: 4px;

    > h3 {
      margin: 0;
      padding: 0;
      font-size: ${theme.fonts.size.large};
      color: ${theme.colors.title};
    }

    > span {
      font-weight: ${theme.fonts.weight.normal};
      font-size: ${theme.fonts.size.small};

      strong {
        font-weight: 500;
      }
    }
  `}
`;
