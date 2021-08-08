import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { WIDTH, COLORS, FONT } from "./constants";
export const GlobalStyles = createGlobalStyle`
    ${normalize}
    html {
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');
        
        font-size: ${FONT.size};
        font-family: ${FONT.Family}, sans-serif;

        --width-mobile: ${WIDTH.mobile};
        --width-desktop: ${WIDTH.desktop};

        --color-grayish-blue: ${COLORS.primary.grayishBlue};
        --color-soft-red:${COLORS.primary.softRed};

        --color-white: ${COLORS.neutral.white};
        --color-dark-desaturated-blue:${COLORS.neutral.darkDesaturatedBlue};
        --color-dark-blue:${COLORS.neutral.darkBlue};
        --color-very-dark-blue:${COLORS.neutral.VeryDarkBlue};


    }
`;
