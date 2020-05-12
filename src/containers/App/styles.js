import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    background: #eeeeee;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  }

  .slick-next:before, .slick-prev:before {
    color: #000 !important;
  }

  div {
    outline: none;
  }
`;
