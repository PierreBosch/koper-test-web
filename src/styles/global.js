import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgb(18, 18, 20);
    color: rgb(225, 225, 230);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
