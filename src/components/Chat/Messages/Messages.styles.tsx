import styled, { css } from 'styled-components';
import BackgroundImg from '../../../assets/wp_132.jpg';

export const Container = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacing.medium} ${theme.spacing.small};
    flex-grow: 1;
    overflow-y: auto;
    background-image: url(${BackgroundImg});
    background-size: contain;
  `}
`;
