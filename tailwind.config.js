/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F9F9F9",
        // orange
        primary: "#FF753A",
        // blue
        secondary: "#22A1EC",
        secondaryLight: "#C7DDF9",
        textGray: "#7E7E7E",
        bgGray: "#F2F4F5",
      },
      boxShadow: {
        custom: "0px 2px 4px 0px rgba(0, 0, 0, 0.25);",
      },
      screens: {
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
      fontFamily: {
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
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
        //  32px
        700: [
          "2rem",
          {
            lineHeight: "2rem",
            fontWeight: "500",
          },
        ],
        //  36px
        800: [
          "2.1rem",
          {
            lineHeight: "130%",
            fontWeight: "900",
          },
        ],
        //  40px
        900: [
          "2.5rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "900",
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
            letterSpacing: '-1.44px',
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
