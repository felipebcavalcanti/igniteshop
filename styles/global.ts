import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
    },

    "body": {
        backgroundColor: "$gray900",
        color: "$gray100",
        "-webkit-font-smoothing": "antialiased",
    },

    "body, input, select, textarea, button" : {
        fontFamily: "Roboto",
        fontWeight: 400,
    },
})