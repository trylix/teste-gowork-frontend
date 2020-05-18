import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:focus, *:hover {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
