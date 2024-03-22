/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'poppins': ["Poppins", " sans-serif"],
        },
        extend: {
            animation: {
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite',
              },
              keyframes: {
                marquee: {
                  '0%': { transform: 'translateX(0%)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                  '0%': { transform: 'translateX(100%)' },
                  '100%': { transform: 'translateX(0%)' },
                },
              },
            colors: {
                primary: {
                    black: "#181C39",
                    brand: "#F15757",
                    dark: {
                        100: "#3E3428",
                        200: '#282828'
                    },
                    gray: "#9ca3af",
                    blue: "#1560F2"
                }
            }
        },
    },
    plugins: [],
}
