/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./src/**/*.vue",
        "./src/**/*.jsx",
        "./src/**/*.js",
        "./src/**/*.ts",
        "./src/**/*.tsx",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#fff",

            gray: {
                100: "#e1e1e6",
                200: "#c4c4cc",
                400: "#7c7c8a",
                800: "#202024",
                900: "#121214",
            },

            cyan: {
                500: "#81d8f7",
                300: "#9be1fb",
            },

            blue: {
                700: "#1d4ed8",
            }
        },
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 24,
            "2xl": 32,
        },
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
