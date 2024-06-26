/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'poppins': ["Poppins", " sans-serif"],
        },
        extend: {
            colors: {
                primary: {
                    brand: "#F15757",
                    dark: {
                        100: "#333333",
                        200: '#282828',
                        300: '#1C1C1C',
                        400: '#272727'

                    },
                    gray: "#9ca3af",
                    blue: "#1560F2"
                }
            }
        },
    },
    plugins: [],
}
