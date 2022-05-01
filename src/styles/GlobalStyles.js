import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    *, :after, :before {
      margin: 0;
      padding: 0;
      -webkit-box-sizing: inherit;
      box-sizing: inherit;
      background-color: transparent;
    }

    html {
      font-size: 62.5%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }

    body {
      min-width: 32rem;
      font-size: 1.6rem;
      letter-spacing: -.03rem;
      background-color: #f9fbfc;
      -moz-osx-font-smoothing: auto;
      font-family: SpoqaHanSansNeo;
    }

    a, button {
      color: inherit;
    }
    
    button {
      letter-spacing: -.03rem;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      outline: inherit;
      font-family: SpoqaHanSansNeo;
    }

    a {
      text-decoration: none;
    }

    li {
      list-style: none;    
    }
    
    strong {
      font-weight: bold;
    }

    img { 
      vertical-align: middle; 
    }

    input:focus {
      outline: none;
    }
`;

export default GlobalStyles;
