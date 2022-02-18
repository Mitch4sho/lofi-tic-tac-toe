import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.backgroundPrimaryColor};
        font-family: 'Outfit', sans-serif;
        font-size: 1.15em;
    }
`;

export default GlobalStyles;
