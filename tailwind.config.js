import { color } from 'motion/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        charcoal_gray: "#1F2937",
        slate_gray: "#2D3748",
        light_gray: "#B0B0B0",
        lighter_gray: "#C0C0C0",
        jet_black: "#1C1C1C",
        teal: "#00b3a4",
        main: "#0a192f",
        text_color: "#ccd6f6",
      },
      screens: {
        xs: "500px",
        // => @media (min-width: 500px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },

      keyframes: {
        underliner: {
          "0%": { width: "0%"  },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "underline-grow": "underliner 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
