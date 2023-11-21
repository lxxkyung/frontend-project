import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  ;

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #fff;
    position: relative;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
    border: none;
    background: none;
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  input:focus {
    outline: none;
  }

  body, button, input, textarea {
    font-family: 'NanumSquareNeo', 'NanumSquare', sans-serif;
  }

  textarea {
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  textarea:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  input[disabled] {
    background-color: white;
  }

  ul,
  ol,
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
