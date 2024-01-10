/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth:{
      container:"1140px",
      containerLarge: "1140px",
      contentcontainer: "720px",
      containerSmall: "540px",
      containerxs: "100%"
    },
    extend: {
      screens:{
        sm: "468px",
        md: "768px",
        lg: "1024px",
        lgl: "1054px",
        xl: "1240px"
      },
      backgroundColor:{
        "radial-gradient" : "(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%)",
        " radial-gradient":"(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%) !important"
      },
      colors:{
        backgroundColor: "#44195e",
        goldColor: "#c29b40",
        whiteColor: "#f8f8f7",
        blackColor: "#010101",
        greyColor: "#767676",
        mixColor: "#bcbcbb"
      },
      fontFamily: {
        bodyFont: ['Poppins', "sans-serif"],
        notoFont: ['Noto Sans', "sans-serif"],
      }
    },
  },
  plugins: [],
}