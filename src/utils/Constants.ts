/*
    ## Colors

    ### Primary

    - Soft red: hsl(7, 99%, 70%)
    - Yellow: hsl(51, 100%, 49%)
    - Dark desaturated cyan (graphic design text): hsl(167, 40%, 24%)
    - Dark blue (photography text): hsl(198, 62%, 26%)
    - Dark moderate cyan (footer): hsl(168, 34%, 41%)

    ### Neutral

    - Very dark desaturated blue: hsl(212, 27%, 19%)
    - Very dark grayish blue: hsl(213, 9%, 39%)
    - Dark grayish blue: hsl(232, 10%, 55%)
    - Grayish blue: hsl(210, 4%, 67%)
    - White: hsl(0, 0%, 100%)
*/

const hsl = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: any) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

export const Colors = {
    softRed: hsl(7, 99, 70),
    yellow: hsl(51, 100, 49),
    darkCyan: hsl(167, 40, 24),
    moderateDarkCyan: hsl(168, 34, 41),

    darkBlue: hsl(198, 62, 26),
    veryDarkBlue:  hsl(212, 27, 19),

    darkGrayishBlue: hsl(232, 10, 55),
    veryDarkGrayishBlue: hsl(213, 9, 39),
    grayishBlue: hsl(210, 4, 67),

    white: hsl(0,0,100),
}

/*
    ## Typography

    ### Body Copy

    - Font size: 18px

    ### Font

    - Family: [Barlow](https://fonts.google.com/specimen/Barlow)
    - Weights: 600
    - Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
    - Weights: 700, 900
*/



