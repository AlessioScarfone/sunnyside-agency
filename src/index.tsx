import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from 'styled-components/macro';

const globalRules = `

  :root {
    --softRed: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --darkCyan: hsl(167, 40%, 24%);
    --moderateDarkCyan: hsl(168, 34%, 41%);
    --darkBlue: hsl(198, 62%, 26%);
    --veryDarkBlue:  hsl(212, 27%, 19%);
    --darkGrayishBlue: hsl(232, 10%, 55%);
    --veryDarkGrayishBlue: hsl(213, 9%, 39%);
    --grayishBlue: hsl(210, 4%, 67%);
    --white: hsl(0,0%,100%);
  }

  html {
    font-size: 16px;
  }

  body {
    width: 100%;
  }
  
  * {
    font-family: 'Fraunces', serif;
    font-size: 1rem;
  } 
  
  p, span, div {
    font-family: 'Barlow', sans-serif;
  }
`;

const cssReset = `
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body, h1,h2, h3, h4, p, figure, blockquote, dl, dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'], ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body { 
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img, picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input, button, textarea, select {
    font: inherit;
  }

`;

const GlobalStyle = createGlobalStyle`
  ${cssReset}
  ${globalRules}
  /* other styles */
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
