const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./public/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        leafBackground: "url(assets/background.jpg)",
        comingSoon: "url(assets/comingsoon.svg)",
        // navbarBG: "url(assets/navbar/background.png)",
        // navbarBGphone: "url(assets/navbar/backgroundphone.png)",
        test: "url(assets/data-analytics.png)",
        bunga1: "url(assets/accordion/bunga1.png)",
        bunga2: "url(assets/accordion/bunga2.png)",
        bunga3: "url(assets/accordion/bunga3.png)",
        bunga4: "url(assets/accordion/bunga4.png)",
        bunga5: "url(assets/accordion/bunga5.png)",
        headerDesktop: "url(assets/header/header_desktop.png)",
        headerTablet: "url(assets/header/header_tablet.png)",
        headerPhone: "url(assets/header/header_phone.png)",
        footerDesktop: "url(assets/footer/footer_desktop.png)",
        footerTablet: "url(assets/footer/footer_tablet.png)",
        footerPhone: "url(assets/footer/footer_phone.png)",
      },
      backgroundSize: {
        "5%": "5%",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      backgroundPosition: {
        "right-top": "right 50%",
      },
      colors: {
        red_10: "#EEDDDD",
        red_100: "#883232",
        broGreen_70: "#C2BF8F",
        broGreen_80: "#878532",
        broGreen_90: "#4F6028",
        broGreen_100: "#173B1F",
        green_50: " #EEF4E4",
        green_60: "#E0EEDD",
        green_65: "#B4D4C4",
        green_70: "#89BBAC",
        green_75: "#5EA193",
        green_80: "#32887B",
        green_90: "#327F6E",
        green_100: "#337760",
        green_105: "#265948",
        green_110: "#193B30",
        orange_70: "#F6DFA3",
        orange_80: "#F0C55A",
        orange_90: "#EEB252",
        orange_100: "#EB9F4B",
        gray: "#8C8C8C",
        whiteish: "#FCFAEB",
      },
      fontFamily: {
        sans: ["Roboto", "Roboto-500", ...defaultTheme.fontFamily.sans],
        lobster: ["Lobster", "cursive"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
