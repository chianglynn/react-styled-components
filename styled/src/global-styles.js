import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
    --color-primary: #645cff;
    --color-white  : #fff;
    }

    body {
    margin                 : 0;
    font-family            : -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing : antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color       : #f2f4f8;
    }
`;

export default GlobalStyles;