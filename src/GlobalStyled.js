import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1d1d1d",
  pointColor: "#ED5AB3",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box
    }

    ul,li{
        list-style: none;
    }

    body{
        background-color: ${mainColors.blackColor};
        color: white;
    }

    a{
        text-decoration: none;
        color: white;
    }
`;
