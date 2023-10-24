import { createGlobalStyle } from "styled-components";

import { theme } from "theme";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Montserrat";
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.palette.gray};
      border-radius: 10px;

      &:hover {
        background: ${theme.palette.darkGray};
      }
    }
  }
`;
