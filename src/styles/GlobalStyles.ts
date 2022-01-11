
import { theme } from './theme';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; // 1rem === 10px
    }

    body {
        font-size: 1.6rem;
        font-family: ${({ theme }: any) => theme.fontFamily.name};
        background-color: ${theme.color.background};
    }

    a {
        text-decoration: none;
        color: ${theme.color.textDark};
        transition: .3s;

        &:hover {
            color: ${theme.color.black};;
        }
    }

    ul {
        list-style: none;
    }
    
`;

export default GlobalStyles;