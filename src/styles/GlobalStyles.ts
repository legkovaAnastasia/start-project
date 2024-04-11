import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primary};
        line-height: 1.5;
        color: ${theme.colors.secondary};
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        color: ${theme.colors.light};
        border: none;
        cursor: pointer;
    }

    section {
        padding: 100px 0;
    }

    h3 {
        font-family: 'Josefine Sans', sans-serif;
        font-weight: 700;
        font-size: 15px;
        letter-spacing: 1px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        color: ${theme.colors.text};
    }
`