/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#67dbda",
         },
         screen: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2x1": "1400px",
         },
         keyframes: {
            moveRight: {
               "0%": { transform: "translateX(0)" },
               "50%": { transform: "translateX(10px)" },
               "100%": { transform: "translateX(0)" },
            },
         },
         animation: { moveRight: "moveRight 1s ease-in-out infinte" },
      },
   },
   plugins: [],
});
