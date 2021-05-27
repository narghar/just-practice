module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Josefin Sans"],
    },
    fontSize: {
      sm: "20px",
      base: "40px",
      lg: "90px",
      xl: "13.5vw",
      max: "260px"
    },

    extend: {
       height: {
         '5/3': '167%',
       },
      screens: {
        "3xl": "1705px",
        "4xl": "1920px",
      },
      colors: {
        primary: {
          heading: "#08132c",
          subheading: "#a6a6a6",
          link: "#fff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
