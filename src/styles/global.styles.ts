import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.body};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.fonts.weight.bold};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    border: 0;
    cursor: pointer;
  }
`;
