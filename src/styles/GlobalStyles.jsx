import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--background);
    height: 100%;
  }

  :root {
    font-size: 62.5%;
    height: 100%;
    --white: #FFFFFF;
    --background-cart: #F4F4F4;
    --background: #F7F7F7;
    --border-cart: #E2E2E2;
    --boder-form: #DDD;
    --border: #EBEBEB;
    --strong-text: #707070;
    --text: #868686;
    --number: #ADC0C4;
    --highlight-text: #B5C401;
    --lotofacil: #7F3992;
    --mega-sena: #01AC66;
    --lotomania: #F79C31;
    --button: #27C383;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--strong-text);
  }
`;

export default GlobalStyles;