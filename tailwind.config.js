/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F9F9F9",
        bgDark: "#1c211f",
        // green
        primary: "#3F8A38",
        primaryLight: "#B9E6B7",
        primaryLighter: "#EDF1F0",
        hilitePrimary: "#EBFFEB",
        // blue
        secondaryDark: "#65B7FF",
        secondary: "#B7E2E6",
        secondaryLight: "#B7BFE6",
        // purple
        secondaryDarker: "#C1B7E6",

        // Black
        selected: "#030303",

        // orange
        tertiary: "#E6BBB7",

        textGray: "#7E7E7E",
        bgGray: "#F7F8FF",
      },
      boxShadow: {
        custom: "0px 2px 4px 0px rgba(0, 0, 0, 0.25);",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lgTab: { min: "1024px", max: "1279px" },

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        15: "repeat(15, minmax(0, 1fr))",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        // 12px
        100: [
          "0.75rem",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        // 14px
        200: [
          "0.875rem",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        // 16px
        300: [
          "1rem",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        // 18px
        400: [
          "1.125rem",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        //  20px
        500: [
          "1.25rem",
          {
            lineHeight: "20px",
            fontWeight: "700",
          },
        ],
        //  24px
        600: [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "500",
          },
        ],
        //  28px
        650: [
          "26px",
          {
            lineHeight: "2rem",
            fontWeight: "500",
          },
        ],
        //  32px
        700: [
          "2rem",
          {
            lineHeight: "120%",
            fontWeight: "700",
            letterSpacing: "-2px",
          },
        ],
        //  36px
        800: [
          "2.1rem",
          {
            lineHeight: "130%",
            fontWeight: "900",
            letterSpacing: "-2px",
          },
        ],
        //  40px
        850: [
          "2.5rem",
          {
            lineHeight: "130%",
            fontWeight: "900",
            letterSpacing: "-2px",
          },
        ],
        //  64px
        900: [
          "64px",
          {
            lineHeight: "110%",
            fontWeight: "800",
            letterSpacing: "-2.44px",
          },
        ],
        //  90px
        950: [
          "90px",
          {
            lineHeight: "95px",
            fontWeight: "800",
            letterSpacing: "-2.44px",
          },
        ],

        xsm: [
          "0.875rem",
          {
            lineHeight: "22.103px",
            fontWeight: "500",
          },
        ],
        "2xl": [
          "54px",
          {
            lineHeight: "120.33%",
            fontWeight: "500",
            fontWeight: "700",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
