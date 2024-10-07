import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }
  #root {
    max-width: 100vw; 
    overflow-x: hidden;
}
`;

export default GlobalStyles;