// "server": "json-server --watch db.json --port 5000"
    // "json-server": "^0.17.0"
import { createGlobalStyle } from "styled-components";

export const flexCenterCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const GlobalStyle = createGlobalStyle`

    *,
    *::after,
    *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-weight: 300;
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
        background-color: var(--color-main);
    }  
    a, button{
        font-family: inherit
    }
`;
