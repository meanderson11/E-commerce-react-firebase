import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 20px 40px;
        font-family: 'Open Sans Condensed',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // background: linear-gradient(180deg, rgba(0, 158, 219) 0%, rgba(10, 201, 122, 1) 100%);
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }
`;