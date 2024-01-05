import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font: inherit;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.WHITE};

    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size:  1.6rem;
        outline: 0;
        -webkit-font-smoothing: antialiased; /* deixa o contorno da fonte mais suave */
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
    }
    
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 20px;
    }

`;
