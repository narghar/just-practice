
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
      },
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        body: "futura-pt, sans-serif",
      },
      colors: {
        yellow: "#fbe80c",
        "yellow-muted": "#fff586",
        inverted: "#003fec",
        "header-gray": "#eeeeee",
        "header-darkgray": "#1d1d1d",
        success: "#0070f3",
        cyan: "#79FFE1",
        ashy: "#a9a9a9",
        colormenu: "#848484",
        "menu-secondary": "#505050",
        darkgray: "#363636",
      },
      fontSize: {
        md: "17px",
        header: "243px",
        menu: "42px",
      },
      width: {
        "7/10": "70%",
        "9/10": "90%"
      },
      maxWidth: {
        "1/3": "33%",
        base: "1295px",
        "hero-image": "895px",
        tab: "194px",
        500: "500px",
        newsletter: "468px",
      },
      height: {
        cardFix: "calc(100% - 7px)",
        0.75: "3px",
        portfolio: "calc(100% - 160px)",
        postcard: "324px",
      },
      minHeight: {
        20: "5rem",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
        200: "0.2em",
      },
      lineHeight: {
        tight: 1.2,
      },
      translate: {
        200: "200%",
      },

      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      zIndex: {
        "-10": "-10",
      },
      flex: {
        "1/3": "1 1 30%",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus", "group-hover"],
    margin: ["responsive", "hover", "focus", "group-hover"],
    left: ["responsive", "hover", "focus", "group-hover"],
    right: ["responsive", "hover", "focus", "group-hover"],
  },
  // plugins: [require("tailwindcss-debug-screens")],
};




// module.exports = {
//   mode: "jit",
//   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     fontFamily: {
//       sans: ["Josefin Sans"],
//     },
//     fontSize: {
//       sm: "20px",
//       base: "40px",
//       lg: "90px",
//       xl: "13.5vw",
//       max: "260px"
//     },

//     extend: {
//        height: {
//          '5/3': '167%',
//        },
//       screens: {
//         "3xl": "1705px",
//         "4xl": "1920px",
//       },
//       colors: {
//         primary: {
//           heading: "#08132c",
//           subheading: "#a6a6a6",
//           link: "#fff",
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
