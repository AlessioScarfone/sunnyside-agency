import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const fontRules = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:ital,wght@0,900;1,700&display=swap');

  html {
    font-size: 16px;
  }
  
  *:not(html) {
    font-family: 'Barlow', sans-serif;
    font-size: 1rem;
  } 
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fraunces', serif;
  }

`

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

${fontRules}
`

const GlobalStyle = createGlobalStyle`
  ${cssReset}
  /* other styles */
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
