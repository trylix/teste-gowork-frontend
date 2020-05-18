import { createGlobalStyle } from 'styled-components';

import gothamBook from '~/assets/fonts/Gotham-Book.woff';
import gothamUltra from '~/assets/fonts/Gotham-Ultra.woff';
import gothamThin from '~/assets/fonts/Gotham-Thin.woff';
import gothamLight from '~/assets/fonts/Gotham-Light.woff';
import gothamMedium from '~/assets/fonts/Gotham-Medium.woff';
import gothamBold from '~/assets/fonts/Gotham-Bold.woff';
import gothamBlack from '~/assets/fonts/Gotham-Black.woff';

import gothamBook2 from '~/assets/fonts/Gotham-Book.woff2';
import gothamUltra2 from '~/assets/fonts/Gotham-Ultra.woff2';
import gothamThin2 from '~/assets/fonts/Gotham-Thin.woff2';
import gothamLight2 from '~/assets/fonts/Gotham-Light.woff2';
import gothamMedium2 from '~/assets/fonts/Gotham-Medium.woff2';
import gothamBold2 from '~/assets/fonts/Gotham-Bold.woff2';
import gothamBlack2 from '~/assets/fonts/Gotham-Black.woff2';

export default createGlobalStyle`
  @font-face {
      font-family: 'Gotham';
      src: url(${gothamBook2}) format('woff2'),
          url(${gothamBook}) format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gotham Ultra';
      src: url(${gothamUltra2}) format('woff2'),
          url(${gothamUltra}) format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gotham';
      src: url(${gothamThin2}) format('woff2'),
          url(${gothamThin}) format('woff');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gotham';
      src: url(${gothamLight2}) format('woff2'),
          url(${gothamLight}) format('woff');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gotham';
      src: url(${gothamMedium2}) format('woff2'),
          url(${gothamMedium}) format('woff');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gotham';
      src: url(${gothamBold2}) format('woff2'),
          url(${gothamBold}) format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gotham';
      src: url(${gothamBlack2}) format('woff2'),
          url(${gothamBlack}) format('woff');
      font-weight: 900;
      font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Gotham, sans-serif;
    font-size: 14px;
  }

  input, button {
    border: none;
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
