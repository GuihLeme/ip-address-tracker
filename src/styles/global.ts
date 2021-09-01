import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --VeryDarkGray: hsl(0, 0%, 17%)
    --DarkGray: hsl(0, 0%, 59%)
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 1.125rem;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 500;
  }
`

export default GlobalStyle;
