// css 커스터마이징 하는 파일
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cwhite: "#ffffff",
        cblack: "#030303",
        line: "#4d4d4d",
        gray: {
          1: "#fbfbfb",
          2: "#eeeeee",
          3: "#ececec",
          4: "#e6e6e6",
          5: "#dfdfdf",
          6: "#cccccc",
          7: "#b3b3b3",
          8: "#999999",
          9: "#767676",
          10: "#666666",
          11: "#242424",
          12: "#151515",
        },
      },
    },
  },
  plugins: [],
};
