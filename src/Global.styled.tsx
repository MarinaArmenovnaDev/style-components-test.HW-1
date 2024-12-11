import {createGlobalStyle} from "styled-components";
import {myTheme} from "./components/styles/Theme.styled";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background-color: ${myTheme.colors.backgroungColor};
        font: 700 10px / 2 "Inter", sans-serif;
    }
    
    button {
        cursor: pointer;
    }


`;
