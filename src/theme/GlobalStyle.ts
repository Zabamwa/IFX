import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: ${({ theme }) => theme.background};
        font-family: sans-serif;
        transition: 0.3s;
    }
`;

export default GlobalStyle;
