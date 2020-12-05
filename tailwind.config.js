/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      primary: "#3f3e56",
      secondary: "#6c63ff",
      danger: "#f66584",
      success: "#1fa73cd1",
      shade: "#d0cde1",
      "primary-hovered": "#3f3e56",
      "secondary-hovered": "#483dfb",
      "danger-hovered": "#f75275",
      pink: "#f8f1f4cf",
      "pink-inside": "#faedf238",
      white: "#fff"
    },
    fontFamily: {
      primary: ["Roboto", "ui-sans-serif"],
      titles: ["'Playfair Display'"]
    },
    inset: {
      0: 0,
      auto: "auto",
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      15: "15rem"
    }
  },
  variants: {},
  plugins: []
};
